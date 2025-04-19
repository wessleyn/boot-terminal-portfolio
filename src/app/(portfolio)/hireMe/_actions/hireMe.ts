'use server';

import { revalidatePath } from 'next/cache';

export interface HireMeFormState {
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
        date?: string[];
        _form?: string[];
    };
    message?: string;
    success?: boolean;
}

export async function hireMe(prevState: HireMeFormState | undefined, formData: FormData): Promise<HireMeFormState> {
    try {
        // Extract data directly from the FormData object
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;
        const date = formData.get('date') as string || null;

        // Validate form data
        if (!name || name.trim() === '') {
            return {
                errors: {
                    name: ['Name is required'],
                    _form: ['Please provide your name']
                }
            };
        }

        if (!email || !email.includes('@')) {
            return {
                errors: {
                    email: ['Valid email is required'],
                    _form: ['Please provide a valid email address']
                }
            };
        }

        if (!message || message.trim() === '') {
            return {
                errors: {
                    message: ['Message is required'],
                    _form: ['Please provide a message']
                }
            };
        }

        // Log the form data that would be saved to the database
        console.log('Hire Me Form Submission:', {
            name,
            email,
            message,
            date: date || new Date().toISOString().split('T')[0],
            submittedAt: new Date().toISOString(),
        });

        // In a real implementation, we would create a DB record here
        // Example pseudo-code:
        // await prisma.contactRequest.create({
        //   data: {
        //     name,
        //     email,
        //     message,
        //     date: date || new Date(),
        //   },
        // });

        // Revalidate the hireMe page
        revalidatePath('/hireMe');

        return {
            success: true,
            message: 'Form submitted successfully!'
        };
    } catch (error) {
        console.error('Error submitting hire me form:', error);
        return {
            success: false,
            errors: {
                _form: ['There was an error submitting your form. Please try again.']
            }
        };
    }
}