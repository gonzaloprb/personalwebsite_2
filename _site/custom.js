// Smooth scrolling for older browsers
document.addEventListener('DOMContentLoaded', function() {
  // Get all "back-to-top" links
  const backToTopLinks = document.querySelectorAll('.back-to-top');
  
  // Add click event to each link
  backToTopLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
});