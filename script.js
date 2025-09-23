js

// Just set the current year in the footer
document.addEventListener('DOMContentLoaded', function() {
  const yearEl = document.getElementById('year');
  const now = new Date();
  yearEl.textContent = now.getFullYear();
});

(function() {
    const header = document.getElementById('main-header');
    let lastScrollY = window.scrollY;
    let isHoveringHeader = false;
    let isMouseNearTop = false;
  
    // Track hover state
    header.addEventListener('mouseenter', () => {
      isHoveringHeader = true;
      header.style.top = "0px";
    });
  
    header.addEventListener('mouseleave', () => {
      isHoveringHeader = false;
    });
  
    // Track mouse near top
    window.addEventListener('mousemove', (e) => {
      isMouseNearTop = e.clientY < 50; // 50px from top
      if (isMouseNearTop && !isHoveringHeader) {
        header.style.top = "0px";
      }
    });
  
    // Hide on scroll down, show on scroll up
    window.addEventListener('scroll', () => {
      if (!isHoveringHeader && !isMouseNearTop) {
        if (window.scrollY > lastScrollY) {
          // Scrolling down → hide header
          header.style.top = "-60px";
        } else {
          // Scrolling up → show header
          header.style.top = "0px";
        }
      }
      lastScrollY = window.scrollY;
    });
  })();