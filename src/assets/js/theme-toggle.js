/**
 * Theme toggle functionality for the terminal-inspired portfolio
 * Supports dark mode (default) and light mode (solarized light)
 */

document.addEventListener('DOMContentLoaded', () => {
    // Create the theme toggle element
    const createThemeToggle = () => {
        const toggle = document.createElement('div');
        toggle.className = 'theme-toggle';
        toggle.innerHTML = `
            <button class="theme-toggle-button" aria-label="Toggle theme" title="Toggle light/dark theme">
                <span class="theme-toggle-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                    </svg>
                </span>
                <span class="theme-toggle-text">terminal theme</span>
            </button>
        `;

        document.body.appendChild(toggle);
        return toggle.querySelector('.theme-toggle-button');
    };

    // Initialize theme based on local storage or system preference
    const initializeTheme = () => {
        const savedTheme = localStorage.getItem('portfolio-theme');
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

        // Default to dark theme unless user has explicitly chosen light or system prefers light
        if (savedTheme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
            updateToggleIcon('light');
        } else if (!savedTheme && !prefersDarkScheme) {
            document.documentElement.setAttribute('data-theme', 'light');
            updateToggleIcon('light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            updateToggleIcon('dark');
        }
    };

    // Update the toggle button icon and text based on current theme
    const updateToggleIcon = (theme) => {
        const toggleText = document.querySelector('.theme-toggle-text');
        const toggleIcon = document.querySelector('.theme-toggle-icon');

        if (!toggleText || !toggleIcon) return;

        if (theme === 'light') {
            toggleText.textContent = 'solaris theme';
            toggleIcon.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
                </svg>
            `;
        } else {
            toggleText.textContent = 'terminal theme';
            toggleIcon.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                </svg>
            `;
        }
    };

    // Handle theme toggle clicks
    const handleThemeToggle = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme);

        // Add animation class for smooth transition
        document.body.classList.add('theme-transitioning');
        setTimeout(() => {
            document.body.classList.remove('theme-transitioning');
        }, 500);

        updateToggleIcon(newTheme);

        // Add terminal-like command output to console
        console.log(`%c$ theme set --mode=${newTheme}`, 'color: #4AF626; font-family: monospace;');
        console.log(`%cTheme switched to ${newTheme} mode successfully.`, 'color: #4AF626; font-family: monospace;');
    };

    // Create the toggle UI and initialize
    const themeToggleButton = createThemeToggle();
    initializeTheme();
    themeToggleButton.addEventListener('click', handleThemeToggle);

    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('portfolio-theme')) {
            // Only auto-switch if user hasn't manually set a preference
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            updateToggleIcon(newTheme);
        }
    });
});