// Basic JavaScript file - You can add interactivity here
// Example:  testimonial slider
document.addEventListener('DOMContentLoaded', function() {
    const controls = document.querySelectorAll('.testimonial-controls button');
    const testimonials = document.querySelector('.testimonial-content');
    let testimonialIndex = 0;
  
    controls.forEach(control => {
        control.addEventListener('click', () => {
            if (control.textContent === '‹') {
                testimonialIndex = Math.max(testimonialIndex - 1, 0);
            } else {
                testimonialIndex = Math.min(testimonialIndex + 1, 2); // Update the "2" to the number of testimonials - 1
            }
  
            // In a full implementation, you'd update the content here
            // based on the current testimonialIndex.  For now, this is a placeholder.
            console.log('Testimonial index: ' + testimonialIndex); // Test code
        });
    });
  });
  