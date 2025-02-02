// main.js
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navbar Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Intersection Observer for Reveal Animations
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  revealElements.forEach(el => revealObserver.observe(el));

  // Lazy Loading Images
  const lazyImages = document.querySelectorAll('.lazy');
  const lazyObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.onload = () => img.style.opacity = 1;
        observer.unobserve(img);
      }
    });
  }, { rootMargin: "0px 0px 50px 0px" });

  lazyImages.forEach(img => lazyObserver.observe(img));
});

// Modal Functions (Exported for potential module usage)
export function openEnquiryForm() {
  document.getElementById('enquiryForm').style.display = 'flex';
}

export function closeEnquiryForm() {
  document.getElementById('enquiryForm').style.display = 'none';
}

export function submitForm(event) {
  event.preventDefault();
  alert('Thank you! We will contact you soon.');
  closeEnquiryForm();
}
