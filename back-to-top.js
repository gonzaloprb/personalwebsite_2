// Simple back to top function
document.addEventListener('DOMContentLoaded', function() {
    // Find all back-to-top links
    var backToTopLinks = document.querySelectorAll('.back-to-top');
    
    // Add click event to each link
    backToTopLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Stop the default link behavior
            
            // Scroll to top smoothly
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
});