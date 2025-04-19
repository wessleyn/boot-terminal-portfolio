// Helper function to get navigation links for projects
export default function getProjectNavigation(currentId: string) {
    const projectIds = ["project-1", "project-2", "project-3"];
    const currentIndex = projectIds.indexOf(currentId);

    let prevProject = null;
    let nextProject = null;

    if (currentIndex > 0) {
        prevProject = {
            id: projectIds[currentIndex - 1],
            title: getProjectTitle(projectIds[currentIndex - 1])
        };
    }

    if (currentIndex < projectIds.length - 1) {
        nextProject = {
            id: projectIds[currentIndex + 1],
            title: getProjectTitle(projectIds[currentIndex + 1])
        };
    }

    return { prevProject, nextProject };
}

function getProjectTitle(id: string) {
    const titles: Record<string, string> = {
        "project-1": "Student Portal",
        "project-2": "Personal Portfolio",
        "project-3": "Job Butler"
    };

    return titles[id] || "Unknown Project";
}