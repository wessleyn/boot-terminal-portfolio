export default async function fetchProject(id: string) {
    // Mock data for projects based on ID
    const projectsData = {
        "project-1": {
            id: "project-1",
            title: "Student Portal",
            description: "A comprehensive student portal with course management, grade tracking, and interactive learning features",
            imagePath: "/public/projects/portal.png",
            overview: "This student portal helps educational institutions streamline course management and student engagement. Students can access course materials, submit assignments, and track grades, while educators manage classes, post announcements, and monitor student progress in real time.",
            technologies: [
                "React", "TypeScript", "MongoDB", "Express.js",
                "Node.js", "Material UI", "Authentication", "Progressive Web App (PWA)"
            ],
            features: [
                "Course enrollment and management",
                "Assignment submission and grading",
                "Real-time grade tracking and progress reports",
                "Interactive calendar with course schedules",
                "Discussion forums per course",
                "Direct messaging between students and instructors",
                "File storage for course materials",
                "Mobile-responsive design for on-the-go access"
            ],
            challenges: [
                "Designing a scalable MongoDB schema to support diverse programs and grading systems.",
                "Implementing role-based access control for students, instructors, and administrators without compromising UX."
            ],
            githubLink: "https://github.com/wessleyn/student-portal",
            demoLink: "https://studentportal.wessleyn.me"
        },
        "project-2": {
            id: "project-2",
            title: "Personal Portfolio",
            description: "A Linux terminal inspired portfolio",
            imagePath: "/public/projects/portfolio.png",
            overview: "Personal Portfolio is a Linux terminal-inspired website that showcases my projects and skills. It features a custom terminal interface that allows users to navigate through my work and learn more about my background. The site now includes live analytics data from Simple Analytics API to demonstrate real-time data visualization capabilities.",
            technologies: [
                "Nunjucks", "Chart.js", "Bootstrap 5", "Node.js",
                "HTML & CSS", "Simple Analytics API", "GitHub Student Pack"
            ],
            features: [
                "Real-time data visualization with live updates from Simple Analytics",
                "Interactive terminal-like interface for project navigation",
                "Dynamic chart rendering with fallback to static data",
                "Responsive design optimized for all device sizes",
                "Automated analytics data refresh capability",
                "Export capabilities for reports and presentations"
            ],
            challenges: [
                "Implementing real-time data fetching from the Simple Analytics API with proper error handling and fallbacks",
                "Optimizing performance for real-time data updates using WebSocket data batching to minimize browser rendering overhead while keeping visualizations current",
                "Creating responsive and accessible visualizations via a custom theme system that adapts to user preferences and accessibility needs"
            ],
            githubLink: "https://github.com/wessleyn/boot-terminal-portfolio",
            demoLink: "https://wessleyn.me",
            hasAnalyticsChart: true
        },
        "project-3": {
            id: "project-3",
            title: "Job Butler",
            description: "An AI-powered job assistant automating applications while you sleep.",
            imagePath: "/public/projects/butler.png",
            overview: "Job Butler is an AI-driven assistant designed to streamline your job search. It analyzes your profile, matches you with relevant openings, auto-submits tailored applications, and provides real-time updates on application status—all while you sleep.",
            technologies: [
                "Next.js 15", "Nuxt.js", "Prisma", "Supabase",
                "TypeScript", "GROQ API", "Auth.js", "...many more"
            ],
            features: [
                "Automated job matching and recommendations",
                "Resume and cover letter customization",
                "One-click application submissions across platforms",
                "Real-time status tracking and notifications",
                "Interview scheduling assistance",
                "Dashboard with application analytics"
            ],
            challenges: [
                "Integrating multiple job board APIs reliably under varying rate limits and data formats.",
                "Ensuring secure authentication and data privacy for user profiles and application data."
            ],
            githubLink: "https://github.com/wessleyn/job-butler",
            demoLink: "https://jobbutler.live"
        }
    };

    // Use type assertion or check if the ID exists in the object
    const validIds = ["project-1", "project-2", "project-3"] as const;
    type ValidId = typeof validIds[number];

    // Check if the provided ID is valid
    const isValidId = (id: string): id is ValidId => {
        return validIds.includes(id as ValidId);
    };

    // Return the project data or a default if not found
    return isValidId(id) ? projectsData[id] : {
        id,
        title: "Project Not Found",
        description: "This project could not be found.",
        imagePath: "/public/profile.png",
        overview: "No details available.",
        technologies: [],
        features: [],
        challenges: [],
        githubLink: "",
        demoLink: ""
    };
}