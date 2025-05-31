window.addEventListener('load', () => {
  const slideEl = document.querySelector('.slide-in');
  if (slideEl) {
    slideEl.style.opacity = '1';
    slideEl.style.animation = 'slideIn 1s ease-out forwards';
  }
});

document.getElementById("contactForm").addEventListener("submit", function(event){
  event.preventDefault();

  emailjs.sendForm('kristijana_ID', 'template_ID', this)
    .then(() => {
      alert("Message sent successfully!");
    }, (error) => {
      alert("Failed to send message: " + error.text);
    });
});
