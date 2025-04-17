---
layout: with-analytics.njk

title: "Personal Portfolio - Wessley Nyakanyanga"
description: "Linux terminal-inspired portfolio showcasing projects and skills"
keywords: "portfolio, linux terminal, data visualization, web development, Nunjucks, Chart.js"

ogTitle: "Personal Portfolio by Wessley Nyakanyanga"
ogDescription: "Navigate my projects through a custom Linux terminal interface"
ogImage: "/assets/img/projects/portfolio.png"
ogUrl: "https://wessleyn.me/projects/project-2.html"

canonical: "https://wessleyn.me/projects/project-2.html"

projectSlug: "project-2"
projectName: "Personal Portfolio"
projectSummary: "A Linux terminal inspired portfolio"
shortDescription: "A statically generated web app"
projectImage: "portfolio.png"

projectOverview: |
  Personal Portfolio is a Linux terminal-inspired website that showcases my projects and skills.
  It features a custom terminal interface that allows users to navigate through my work and learn
  more about my background. The site now includes live analytics data from Simple Analytics API
  to demonstrate real-time data visualization capabilities.

technologies:
  - Nunjucks
  - Chart.js
  - Bootstrap 5
  - Node.js
  - HTML & CSS
  - Simple Analytics API
  - GitHub Student Pack

features:
  - Real-time data visualization with live updates from Simple Analytics
  - Interactive terminal-like interface for project navigation
  - Dynamic chart rendering with fallback to static data
  - Responsive design optimized for all device sizes
  - Automated analytics data refresh capability
  - Export capabilities for reports and presentations

challenges:
  - Implementing real-time data fetching from the Simple Analytics API with proper error handling and fallbacks
  - Optimizing performance for real-time data updates using WebSocket data batching to minimize browser rendering overhead while keeping visualizations current
  - Creating responsive and accessible visualizations via a custom theme system that adapts to user preferences and accessibility needs

prevProject: "project-2"
nextProject: "project-4"

githubUrl: "https://github.com/wessleyn/boot-terminal-portfolio"
demoUrl: "https://wessleyn.me"

chartType: line
chartLabels:
  - Jan
  - Feb
  - Mar
  - Apr
  - May
  - Jun
  - Jul
  - Aug
chartData:
  - 120
  - 145
  - 205
  - 275
  - 310
  - 340
  - 420
  - 485
chartTitle: "Portfolio Visitors"
chartColor: "#3e64ff"
chartDescription: "Visitor statistics for my portfolio showing real-time data pulled from Simple Analytics API. The chart automatically refreshes and displays both visitors and pageviews from the last two days."
---
