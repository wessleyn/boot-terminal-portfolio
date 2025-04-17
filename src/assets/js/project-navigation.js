/**
 * Project Navigation - Automatically calculates previous and next projects
 * This script runs after the page has loaded and updates navigation links
 * dynamically based on the projectSlug value.
 */
document.addEventListener('DOMContentLoaded', function () {
    // Array of project slugs in order (matches the file names without extension)
    const projectOrder = ["project-1", "project-2", "project-3", "project-4"];

    // Get current project slug from the page
    const breadcrumbItems = document.querySelectorAll('.terminal-breadcrumb .breadcrumb-item');
    if (!breadcrumbItems || breadcrumbItems.length < 3) return; // Not on a project page

    const currentSlug = breadcrumbItems[2].textContent.trim();
    const currentIndex = projectOrder.indexOf(currentSlug);

    if (currentIndex === -1) return; // Current project not in the ordered list

    // Get navigation container
    const navContainer = document.querySelector('.project-navigation .d-flex');
    if (!navContainer) return;

    // Clear existing navigation links
    navContainer.innerHTML = "";

    // Add previous project link if not the first project
    if (currentIndex > 0) {
        const prevSlug = projectOrder[currentIndex - 1];
        const prevLink = document.createElement('a');
        prevLink.href = `/${prevSlug}`;
        prevLink.className = 'btn btn-outline-primary';
        prevLink.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"
          class="bi bi-arrow-left me-2">
          <path fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z">
          </path>
      </svg>Previous Project
    `;
        navContainer.appendChild(prevLink);
    } else {
        // Add placeholder for layout balance
        const placeholder = document.createElement('span');
        navContainer.appendChild(placeholder);
    }

    // Add next project link if not the last project
    if (currentIndex < projectOrder.length - 1) {
        const nextSlug = projectOrder[currentIndex + 1];
        const nextLink = document.createElement('a');
        nextLink.href = `/${nextSlug}`;
        nextLink.className = 'btn btn-primary-dragient';
        nextLink.innerHTML = `
      Next Project
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"
          class="bi bi-arrow-right ms-2">
          <path fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z">
          </path>
      </svg>
    `;
        navContainer.appendChild(nextLink);
    } else {
        // Add placeholder for layout balance
        const placeholder = document.createElement('span');
        navContainer.appendChild(placeholder);
    }
});