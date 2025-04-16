/**
 * Enhanced chart initialization for portfolio projects
 */
document.addEventListener('DOMContentLoaded', function () {
    try {
        // Make sure Chart is loaded
        if (typeof Chart === 'undefined') {
            console.error('Chart.js library not loaded yet');
            return;
        }

        // Find all canvas elements with chart data
        const chartElements = document.querySelectorAll('[data-bss-chart]');

        if (chartElements.length === 0) {
            console.log('No chart elements found on this page');
            return;
        }

        console.log(`Found ${chartElements.length} chart element(s) to initialize`);

        // Process each chart element
        chartElements.forEach(function (element, index) {
            try {
                const chartData = JSON.parse(element.getAttribute('data-bss-chart'));
                console.log(`Initializing chart ${index + 1}:`, chartData.type);

                // Create the chart
                new Chart(element, chartData);
                console.log(`Chart ${index + 1} initialized successfully`);
            }
            catch (elementError) {
                console.error(`Failed to initialize chart ${index + 1}:`, elementError);
                // Display error message on canvas itself for debugging
                const ctx = element.getContext('2d');
                if (ctx) {
                    ctx.font = '14px Arial';
                    ctx.fillStyle = 'red';
                    ctx.textAlign = 'center';
                    ctx.fillText('Chart failed to render', element.width / 2, element.height / 2);
                    ctx.fillText('Check console for details', element.width / 2, element.height / 2 + 20);
                }
            }
        });
    }
    catch (error) {
        console.error('Error initializing charts:', error);
    }
});