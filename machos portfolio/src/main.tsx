
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Add form submission and 3D effects after the page loads
document.addEventListener('DOMContentLoaded', () => {
  // Form submission handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Create and display a notification
      const notification = document.createElement('div');
      notification.className = 'notification';
      notification.innerHTML = 'Thank you for your message! I will get back to you soon.';
      notification.style.position = 'fixed';
      notification.style.bottom = '20px';
      notification.style.right = '20px';
      notification.style.backgroundColor = 'rgba(10, 207, 167, 0.9)';
      notification.style.color = 'white';
      notification.style.padding = '15px 25px';
      notification.style.borderRadius = '10px';
      notification.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
      notification.style.zIndex = '9999';
      notification.style.transform = 'translateY(100px)';
      notification.style.opacity = '0';
      notification.style.transition = 'all 0.5s ease';
      
      document.body.appendChild(notification);
      
      // Animate notification
      setTimeout(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
      }, 100);
      
      // Remove notification after 5 seconds
      setTimeout(() => {
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 500);
      }, 5000);
      
      contactForm.reset();
    });
  }

  // 3D effect for contact form
  const formCard = document.querySelector('.form-card');
  if (formCard) {
    document.addEventListener('mousemove', function(e) {
      if (window.innerWidth > 768) { // Only apply effect on larger screens
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        formCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      }
    });

    // Reset transform when mouse leaves viewport
    document.addEventListener('mouseleave', function() {
      formCard.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
  }
});
