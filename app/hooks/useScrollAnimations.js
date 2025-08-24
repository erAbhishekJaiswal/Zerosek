// "use client"
import { useEffect } from 'react';

export const useScrollAnimations = () => {
  useEffect(() => {
    const animateElements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          element.classList.add('animate');
          
          // Add delay if specified
          const delay = element.getAttribute('data-delay');
          if (delay) {
            element.style.transitionDelay = `${delay * 0.1}s`;
          }
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    animateElements.forEach(element => {
      observer.observe(element);
    });

    // Initial check for elements already in view
    const checkInitialView = () => {
      animateElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = (
          rect.top <= (window.innerHeight * 0.8) && 
          rect.bottom >= (window.innerHeight * 0.2)
        );
        
        if (isVisible) {
          element.classList.add('animate');
        }
      });
    };

    setTimeout(checkInitialView, 300);

    return () => {
      animateElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
};