/**
 * Project Cards Click Enhancement
 * Improves clickability of project cards by adding direct click handlers
 * and preventing click event interference
 */
document.addEventListener('DOMContentLoaded', function() {
    // Get all project cards
    const projectCards = document.querySelectorAll('.project-item');
    
    projectCards.forEach(card => {
        // Find the link inside the card
        const cardLink = card.querySelector('a.stretched-link');
        if (!cardLink) return;
        
        // Store the destination URL
        const href = cardLink.getAttribute('href');
        
        // Make the entire card clickable with higher priority
        card.addEventListener('click', function(e) {
            // Prevent default behavior of any child elements
            e.preventDefault();
            e.stopPropagation();
            
            // Navigate to the link destination
            window.location.href = href;
        });
        
        // Prevent pointer-events interference by custom overlays
        const overlays = card.querySelectorAll('.card-img-overlay, .project-badge, .project-countdown');
        overlays.forEach(overlay => {
            if (overlay) {
                overlay.style.pointerEvents = 'none';
            }
        });
    });
});