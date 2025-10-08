document.addEventListener("DOMContentLoaded", () => {
  // =================================
  // tsParticles Configuration
  // =================================
  tsParticles.load("tsparticles", {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        resize: true,
      },
      modes: { grab: { distance: 140, links: { opacity: 1 } } },
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        color: "#22a39f", // رنگ خطوط (رنگ تأکیدی سایت)
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      collisions: { enable: true },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 1,
        straight: false,
      },
      number: { density: { enable: true, area: 800 }, value: 60 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  });

  // =================================
  // Typewriter Effect Logic
  // =================================
  const dynamicText = document.querySelector(".dynamic-text");
  if (dynamicText) {
    const words = ["طراح گرافیک", "متخصص UI/UX", "هویت بصری", "برندینگ"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
      const currentWord = words[wordIndex];
      if (!isDeleting) {
        dynamicText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      } else {
        dynamicText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 3000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }

      const typingSpeed = isDeleting ? 75 : 150;
      setTimeout(typeEffect, typingSpeed);
    };
    typeEffect();
  }
});

// =================================
// Header Scroll Logic
// =================================
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

// =================================
// Scroll Animation Logic
// =================================
const hiddenElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("hidden");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);
hiddenElements.forEach((el) => observer.observe(el));
