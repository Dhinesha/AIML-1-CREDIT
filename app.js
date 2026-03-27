// Form submission handler
function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Show success message
  alert(
    "Message sent successfully!\n\nThank you " +
      name +
      ", your message has been sent successfully. I'll get back to you soon!",
  );

  // Reset form
  event.target.reset();

  return false;
}
// Smooth scroll and active navigation
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all links
      navLinks.forEach((l) => l.classList.remove("active"));

      // Add active class to clicked link
      this.classList.add("active");

      // Smooth scroll to section
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Update active link on scroll
  window.addEventListener("scroll", function () {
    let current = "";
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

  // Lightbox functionality
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.querySelector(".lightbox-close");
  const galleryImages = document.querySelectorAll(".gallery-image");
  const profilePhoto = document.getElementById("profile-photo");
  const profileUploadInput = document.getElementById("profile-upload-input");

  if (profilePhoto && profileUploadInput) {
    profileUploadInput.addEventListener("change", function (event) {
      const selectedFile = event.target.files && event.target.files[0];
      if (!selectedFile) {
        return;
      }

      const imageReader = new FileReader();
      imageReader.onload = function (loadEvent) {
        profilePhoto.src = loadEvent.target.result;
      };
      imageReader.readAsDataURL(selectedFile);
    });
  }

  const openLightboxPreview = (projectTitle) => {
    if (!lightbox || !lightboxImg) {
      return;
    }
    const safeTitle = projectTitle || "Project";
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='700'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='#0ea5e9'/><stop offset='100%' stop-color='#4338ca'/></linearGradient></defs><rect width='100%' height='100%' fill='url(#g)'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial, sans-serif' font-size='56' font-weight='700'>${safeTitle}</text></svg>`;
    lightboxImg.src =
      "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
    lightboxImg.alt = safeTitle + " preview";
    lightbox.classList.add("active");
  };

  // Open lightbox on gallery card click/keyboard
  galleryImages.forEach((card) => {
    card.addEventListener("click", function () {
      openLightboxPreview(this.dataset.title);
    });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightboxPreview(this.dataset.title);
      }
    });
  });

  // Close lightbox on close button click
  if (lightboxClose && lightbox) {
    lightboxClose.addEventListener("click", function () {
      lightbox.classList.remove("active");
    });
  }

  // Close lightbox on background click
  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) {
        lightbox.classList.remove("active");
      }
    });
  }

  // Close lightbox on ESC key
  document.addEventListener("keydown", function (e) {
    if (
      lightbox &&
      e.key === "Escape" &&
      lightbox.classList.contains("active")
    ) {
      lightbox.classList.remove("active");
    }
  });
});
