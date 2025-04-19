'use client';
// Create a submit button component that can access the form's submission state
export function SubmitButton({ pending }: { pending: boolean; }) {

    return (
        <button
            className="btn btn-lg btn-primary-dragient terminal-button"
            type="submit"
            disabled={pending}
        >
            {pending ? 'Processing...' : 'run ./hire_me.sh'}
        </button>
    );
}
