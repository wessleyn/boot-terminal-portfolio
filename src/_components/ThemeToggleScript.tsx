'use client';

import { useEffect } from 'react';

export default function ThemeToggleScript() {
    useEffect(() => {
        // Get theme from localStorage or use system preference
        const getTheme = () => {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) return savedTheme;

            return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';
        };

        // Apply theme to document
        const applyTheme = (theme: string) => {
            document.documentElement.setAttribute('data-bs-theme', theme);
            localStorage.setItem('theme', theme);

            const toggleText = document.querySelector('.theme-toggle-text');
            const toggleIcon = document.querySelector('.theme-toggle-icon');

            if (toggleText) {
                toggleText.innerHTML = `${theme} theme`;
            }

            if (toggleIcon) {
                toggleIcon.innerHTML = theme === 'dark'
                    ? '<i class="fas fa-moon"></i>'
                    : '<i class="fas fa-sun"></i>';
            }
        };

        // Initialize theme
        applyTheme(getTheme());

        // Add click event to theme toggle button
        const toggleButton = document.querySelector('.theme-toggle-button');
        if (toggleButton) {
            toggleButton.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-bs-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                applyTheme(newTheme);
            });
        }
    }, []);

    return null;
}
