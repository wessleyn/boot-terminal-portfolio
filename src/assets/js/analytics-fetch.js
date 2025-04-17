/**
 * Simple Analytics API Integration
 * Fetches visitor data and updates chart visualization in real-time
 */

class AnalyticsFetcher {
    constructor(selector = '[data-analytics-chart]') {
        this.selector = selector;
        this.apiUrl = 'https://simpleanalytics.com/wessleyn.me.json?version=5&fields=histogram&start=yesterday&end=today';
        this.chartInstances = new Map();
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            const chartElements = document.querySelectorAll(this.selector);
            if (chartElements.length > 0) {
                console.log(`Found ${chartElements.length} analytics chart(s) to populate`);
                this.fetchData()
                    .then(data => {
                        chartElements.forEach((element, index) => {
                            this.updateChart(element, data, index);
                        });
                    })
                    .catch(error => {
                        console.error('Failed to fetch analytics data:', error);
                        // Fall back to static data if API fails
                        chartElements.forEach((element) => {
                            // Don't override if there's already a chart instance
                            if (!element.getAttribute('data-chart-initialized')) {
                                this.renderStaticChart(element);
                            }
                        });
                    });
            }
        });
    }

    async fetchData() {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) {
                throw new Error(`API responded with status ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching analytics data:', error);
            throw error;
        }
    }

    updateChart(element, apiData, index) {
        // Parse existing chart configuration
        let config;
        try {
            config = JSON.parse(element.getAttribute('data-bss-chart'));
        } catch (error) {
            console.error('Invalid chart configuration:', error);
            return;
        }

        // Extract relevant data from API response
        if (apiData && apiData.histogram) {
            const histogramData = apiData.histogram;
            const labels = histogramData.map(entry => entry.date);
            const visitors = histogramData.map(entry => entry.visitors);
            const pageviews = histogramData.map(entry => entry.pageviews);

            // Prepare new dataset configuration
            const newDatasets = [
                {
                    label: 'Visitors',
                    fill: true,
                    data: visitors,
                    backgroundColor: 'rgba(78, 115, 223, 0.05)',
                    borderColor: config.data.datasets[0].borderColor || '#ff5fd7'
                },
                {
                    label: 'Pageviews',
                    fill: true,
                    data: pageviews,
                    backgroundColor: 'rgba(28, 200, 138, 0.05)',
                    borderColor: '#1cc88a'
                }
            ];

            // Update chart configuration
            config.data.labels = labels;
            config.data.datasets = newDatasets;

            // Enable legend for multiple datasets
            config.options.legend = {
                display: true,
                position: 'bottom',
                labels: {
                    fontStyle: 'normal',
                    padding: 15
                }
            };

            // Add timestamps to chart
            const timestamp = new Date().toLocaleTimeString();
            config.options.title = {
                display: true,
                text: `Last updated: ${timestamp}`,
                position: 'top',
                fontSize: 12,
                fontColor: '#858796'
            };

            // Remove old attribute and create new chart
            element.removeAttribute('data-bss-chart');
            element.setAttribute('data-analytics-chart', JSON.stringify(config));
            element.setAttribute('data-chart-initialized', 'true');

            // Create new chart instance
            const ctx = element.getContext('2d');
            const chartInstance = new Chart(ctx, config);
            this.chartInstances.set(index, chartInstance);

            // Add refresh button
            this.addRefreshButton(element, index);

            console.log('Chart updated with live analytics data');
        } else {
            console.error('Invalid API data format', apiData);
            this.renderStaticChart(element);
        }
    }

    renderStaticChart(element) {
        // Fallback to static chart rendering
        console.log('Falling back to static chart data');
        const staticConfig = JSON.parse(element.getAttribute('data-bss-chart'));
        new Chart(element, staticConfig);
    }

    addRefreshButton(chartElement, chartIndex) {
        // Create container for the button
        const container = document.createElement('div');
        container.className = 'refresh-button-container';
        container.style.textAlign = 'right';
        container.style.marginTop = '10px';

        // Create refresh button
        const button = document.createElement('button');
        button.className = 'btn btn-sm btn-outline-primary';
        button.innerHTML = 'Refresh Data';
        button.addEventListener('click', () => this.refreshData(chartIndex));

        // Add button to container and insert after chart element
        container.appendChild(button);
        chartElement.parentNode.insertBefore(container, chartElement.nextSibling);
    }

    async refreshData(chartIndex) {
        try {
            const data = await this.fetchData();
            const chartInstance = this.chartInstances.get(chartIndex);

            if (chartInstance && data.histogram) {
                const histogramData = data.histogram;
                const labels = histogramData.map(entry => entry.date);
                const visitors = histogramData.map(entry => entry.visitors);
                const pageviews = histogramData.map(entry => entry.pageviews);

                // Update datasets
                chartInstance.data.labels = labels;
                chartInstance.data.datasets[0].data = visitors;
                chartInstance.data.datasets[1].data = pageviews;

                // Update timestamp
                const timestamp = new Date().toLocaleTimeString();
                chartInstance.options.title.text = `Last updated: ${timestamp}`;

                // Refresh chart
                chartInstance.update();
                console.log('Chart data refreshed');
            }
        } catch (error) {
            console.error('Error refreshing chart data:', error);
        }
    }
}

// Initialize analytics fetcher
new AnalyticsFetcher();