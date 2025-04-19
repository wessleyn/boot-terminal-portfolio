'use client';

import { Chart, registerables } from 'chart.js';
import { useEffect } from 'react';

// Register all chart components
Chart.register(...registerables);

export default function ChartWrapper() {
  useEffect(() => {
    const charts = document.querySelectorAll('[data-bss-chart]');

    charts.forEach(chartElement => {
      if (!chartElement.getAttribute('data-chart-initialized')) {
        try {
          const chartData = JSON.parse(chartElement.getAttribute('data-bss-chart') || '{}');
          new Chart(chartElement as HTMLCanvasElement, chartData);
          chartElement.setAttribute('data-chart-initialized', 'true');
        } catch (error) {
          console.error('Error initializing chart:', error);
        }
      }
    });
  }, []);

  return null;
}
