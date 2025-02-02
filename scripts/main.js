// main.js
document.addEventListener('DOMContentLoaded', () => {
  // Navbar toggle for mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Intersection Observer for reveal animations
  const revealElements = document.querySelectorAll('.reveal');
  const observerOptions = {
    threshold: 0.2,
  };

  const revealOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(revealOnScroll, observerOptions);
  revealElements.forEach((el) => observer.observe(el));

  // Lazy Load Images
  const lazyImages = document.querySelectorAll('.lazy');
  const imageObserverOptions = {
    rootMargin: '0px 0px 50px 0px',
  };

  const lazyLoad = (entries, imgObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.bg) {
          img.style.backgroundImage = `url(${img.dataset.bg})`;
        } else if (img.dataset.src) {
          img.src = img.dataset.src;
        }
        img.classList.remove('lazy');
        imgObserver.unobserve(img);
      }
    });
  };

  const imgObserver = new IntersectionObserver(lazyLoad, imageObserverOptions);
  lazyImages.forEach((img) => {
    imgObserver.observe(img);
  });

  // Parallax effect for hero background
  const heroBg = document.querySelector('.hero-bg');
  window.addEventListener('scroll', () => {
    const offset = window.pageYOffset;
    if (heroBg) {
      heroBg.style.transform = `translateY(${offset * 0.5}px)`;
    }
  });
});

// Enquiry Form Modal Functions
export function openEnquiryForm() {
  const enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) {
    enquiryForm.style.display = 'flex';
  }
}

export function closeEnquiryForm() {
  const enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) {
    enquiryForm.style.display = 'none';
  }
}

export function submitForm(event) {
  event.preventDefault();
  alert('Thank you for your enquiry! We will contact you soon.');
  closeEnquiryForm();
}
