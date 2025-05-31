(function () {
  emailjs.init("by8N7868XYnxqdQMp"); // public key
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.send("kristijana_ID", "template_9dupl7z", {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      title: document.getElementById("title").value,
      message: document.getElementById("message").value,
      time: new Date().toLocaleString()
    })
    .then(function () {
      alert("Message sent successfully! ✨");
      form.reset();
    }, function (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Check your EmailJS setup.");
    });
  });
});
