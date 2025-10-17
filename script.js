/* ====================================================================
   🚀 MILAD GOLI - PORTFOLIO JAVASCRIPT
   Product Designer Portfolio - Premium Edition
   ==================================================================== */

"use strict";

/* ====================================================================
   ۱. Page Loader
   ==================================================================== */
window.addEventListener("load", () => {
  const loader = document.querySelector(".page-loader");
  setTimeout(() => {
    loader.classList.add("hidden");
    // بعد از اتمام انیمیشن، loader را از DOM حذف کن
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 1000); // 1 ثانیه صبر می‌کنه
});

/* ====================================================================
   ۲. Custom Cursor
   ==================================================================== */
const cursor = {
  dot: document.querySelector(".cursor-dot"),
  outline: document.querySelector(".cursor-outline"),

  init() {
    if (!this.dot || !this.outline) return;

    // Mouse Move
    document.addEventListener("mousemove", (e) => {
      this.dot.style.left = e.clientX + "px";
      this.dot.style.top = e.clientY + "px";

      this.outline.style.left = e.clientX + "px";
      this.outline.style.top = e.clientY + "px";
    });

    // Hover Effects
    const hoverElements = document.querySelectorAll(
      "a, button, .portfolio-item, .filter-btn, .btn, input, textarea"
    );

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        document.body.classList.add("cursor-hover");
      });

      el.addEventListener("mouseleave", () => {
        document.body.classList.remove("cursor-hover");
      });
    });
  },
};

/* ====================================================================
   ۳. Scroll Progress Bar
   ==================================================================== */
const scrollProgress = {
  bar: document.querySelector(".progress-bar"),

  init() {
    if (!this.bar) return;

    window.addEventListener("scroll", () => {
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (window.pageYOffset / windowHeight) * 100;
      this.bar.style.width = scrolled + "%";
    });
  },
};

/* ====================================================================
   ۴. Header Scroll Effect
   ==================================================================== */
const header = {
  element: document.querySelector("header"),

  init() {
    if (!this.element) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        this.element.classList.add("header-scrolled");
      } else {
        this.element.classList.remove("header-scrolled");
      }
    });
  },
};

/* ====================================================================
   ۵. Mobile Menu
   ==================================================================== */
const mobileMenu = {
  toggle: document.querySelector(".mobile-menu-toggle"),
  menu: document.querySelector(".nav-menu"),
  links: document.querySelectorAll(".nav-menu a"),

  init() {
    if (!this.toggle || !this.menu) return;

    // Toggle Menu
    this.toggle.addEventListener("click", () => {
      this.toggle.classList.toggle("active");
      this.menu.classList.toggle("active");
      document.body.style.overflow = this.menu.classList.contains("active")
        ? "hidden"
        : "auto";
    });

    // Close on Link Click
    this.links.forEach((link) => {
      link.addEventListener("click", () => {
        this.toggle.classList.remove("active");
        this.menu.classList.remove("active");
        document.body.style.overflow = "auto";
      });
    });

    // Close on Outside Click
    document.addEventListener("click", (e) => {
      if (!this.menu.contains(e.target) && !this.toggle.contains(e.target)) {
        this.toggle.classList.remove("active");
        this.menu.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });
  },
};

/* ====================================================================
   ۶. tsParticles Configuration
   ==================================================================== */
const particlesConfig = {
  init() {
    if (typeof tsParticles === "undefined") return;

    tsParticles.load("tsparticles", {
      background: {
        color: { value: "transparent" },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 1,
            },
          },
          push: {
            quantity: 2,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#22a39f",
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 60,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    });
  },
};

/* ====================================================================
   ۷. Typewriter Effect
   ==================================================================== */
const typewriter = {
  element: document.querySelector(".dynamic-text"),
  words: [
    "طراح رابط کاربری (UI Designer)",
    "متخصص تجربه کاربری (UX Designer)",
    "طراح هویت بصری",
    "متخصص برندینگ",
  ],
  wordIndex: 0,
  charIndex: 0,
  isDeleting: false,

  init() {
    if (!this.element) return;
    this.type();
  },

  type() {
    const currentWord = this.words[this.wordIndex];

    if (this.isDeleting) {
      this.charIndex--;
      this.element.textContent = currentWord.substring(0, this.charIndex);
    } else {
      this.charIndex++;
      this.element.textContent = currentWord.substring(0, this.charIndex);
    }

    // سرعت تایپ
    let typeSpeed = this.isDeleting ? 75 : 150;

    // اگر کلمه کامل نوشته شد
    if (!this.isDeleting && this.charIndex === currentWord.length) {
      typeSpeed = 3000; // 3 ثانیه صبر کن
      this.isDeleting = true;
    }
    // اگر کلمه کامل پاک شد
    else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      typeSpeed = 500; // نیم ثانیه قبل از شروع کلمه بعدی
    }

    setTimeout(() => this.type(), typeSpeed);
  },
};

/* ====================================================================
   ۸. Counter Animation - نسخه بهبود یافته
   ==================================================================== */
const counterAnimation = {
  counters: document.querySelectorAll(".counter"),
  hasAnimated: false,

  init() {
    if (this.counters.length === 0) return;

    const heroStats = document.querySelector(".hero-stats");
    if (!heroStats) return;

    // چک کن که آیا Hero Stats از اول در viewport هست؟
    const isInitiallyVisible = this.isInViewport(heroStats);

    if (isInitiallyVisible) {
      // اگر از اول visible هست، بعد از 1.5 ثانیه شروع کن (بعد از انیمیشن fadeIn)
      setTimeout(() => {
        this.animateCounters();
        this.hasAnimated = true;
      }, 1500);
    } else {
      // اگر نیست، با Intersection Observer منتظر بمون
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.hasAnimated) {
              this.hasAnimated = true;
              this.animateCounters();
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(heroStats);
    }
  },

  // چک کردن اینکه المنت در viewport هست یا نه
  isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },

  animateCounters() {
    this.counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target"));
      const duration = 2000; // 2 ثانیه
      const increment = target / (duration / 16); // 60 FPS
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };

      updateCounter();
    });
  },
};

/* ====================================================================
   ۹. Scroll Animations (AOS Alternative)
   ==================================================================== */
const scrollAnimations = {
  init() {
    // اگر AOS موجود باشه، اونو استفاده کن
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 700,
        easing: "ease-out-cubic",
        once: true,
        offset: 50, // کمتر کردیم تا زودتر trigger بشه
        delay: 0,
        disable: false,
        startEvent: "DOMContentLoaded",
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
      });

      // رفرش AOS بعد از لود کامل صفحه
      window.addEventListener("load", () => {
        setTimeout(() => {
          AOS.refresh();
        }, 100);
      });
    } else {
      // در غیر این صورت، یک راه‌حل ساده
      this.observeElements();
    }
  },

  observeElements() {
    const elements = document.querySelectorAll("[data-aos]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
  },
};

/* ====================================================================
   ۱۰. Portfolio Filter System
   ==================================================================== */
const portfolioFilter = {
  filterBtns: document.querySelectorAll(".filter-btn"),
  portfolioItems: document.querySelectorAll(".portfolio-item"),
  noResults: document.querySelector(".no-results"),

  init() {
    if (this.filterBtns.length === 0) return;

    // شمارش خودکار تعداد آیتم‌ها
    this.updateCounts();

    this.filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.filter(e.currentTarget);
      });
    });
  },

  // متد جدید برای شمارش
  updateCounts() {
    this.filterBtns.forEach((btn) => {
      const filter = btn.getAttribute("data-filter");
      const countElement = btn.querySelector(".filter-count");

      if (!countElement) return;

      let count = 0;

      if (filter === "all") {
        // شمارش همه آیتم‌ها
        count = this.portfolioItems.length;
      } else {
        // شمارش آیتم‌های یک دسته خاص
        count = document.querySelectorAll(
          `.portfolio-item[data-category="${filter}"]`
        ).length;
      }

      // نمایش تعداد
      countElement.textContent = count;

      // اگه تعداد صفر بود، دکمه رو مخفی کن (اختیاری)
      if (count === 0) {
        btn.style.display = "none";
      } else {
        btn.style.display = "flex";
      }
    });
  },

  filter(btn) {
    // Remove active from all buttons
    this.filterBtns.forEach((b) => b.classList.remove("active"));

    // Add active to clicked button
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    let visibleCount = 0;

    this.portfolioItems.forEach((item) => {
      const category = item.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        // Show item
        item.style.display = "block";
        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "scale(1)";
        }, 10);
        visibleCount++;
      } else {
        // Hide item
        item.style.opacity = "0";
        item.style.transform = "scale(0.8)";
        setTimeout(() => {
          item.style.display = "none";
        }, 300);
      }
    });

    // Show/Hide no results message
    if (this.noResults) {
      if (visibleCount === 0) {
        setTimeout(() => {
          this.noResults.classList.add("show");
          this.noResults.style.display = "block";
        }, 300);
      } else {
        this.noResults.classList.remove("show");
        this.noResults.style.display = "none";
      }
    }
  },
};
/* ====================================================================
   ۱۲. Contact Form
   ==================================================================== */
const contactForm = {
  form: document.getElementById("contactForm"),

  init() {
    if (!this.form) return;

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleSubmit();
    });
  },

  handleSubmit() {
    const formData = new FormData(this.form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    // اینجا می‌تونی به یک API ارسال کنی
    console.log("Form Data:", data);

    // نمایش پیام موفقیت
    this.showSuccess();
  },

  showSuccess() {
    const btn = this.form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    btn.innerHTML = '<i class="fas fa-check"></i> پیام با موفقیت ارسال شد!';
    btn.style.background = "#10b981";
    btn.disabled = true;

    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = "";
      btn.disabled = false;
      this.form.reset();
    }, 3000);
  },
};

/* ====================================================================
   ۱۳. Smooth Scroll
   ==================================================================== */
const smoothScroll = {
  init() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        // اگر فقط # باشه، اجرا نشه
        if (href === "#") return;

        e.preventDefault();

        const target = document.querySelector(href);
        if (!target) return;

        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      });
    });
  },
};

/* ====================================================================
   ۱۴. Lazy Loading Images
   ==================================================================== */
const lazyLoad = {
  images: document.querySelectorAll('img[loading="lazy"]'),

  init() {
    if ("loading" in HTMLImageElement.prototype) {
      // مرورگر از lazy loading پشتیبانی می‌کنه
      return;
    }

    // برای مرورگرهای قدیمی
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          imageObserver.unobserve(img);
        }
      });
    });

    this.images.forEach((img) => imageObserver.observe(img));
  },
};

/* ====================================================================
   ۱۵. Back to Top Button (اختیاری)
   ==================================================================== */
const backToTop = {
  button: null,

  init() {
    // ایجاد دکمه
    this.button = document.createElement("button");
    this.button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    this.button.className = "back-to-top";
    this.button.setAttribute("aria-label", "بازگشت به بالا");

    // استایل inline
    this.button.style.cssText = `
      position: fixed;
      bottom: 2rem;
      left: 2rem;
      width: 50px;
      height: 50px;
      background: var(--color-primary);
      color: var(--color-dark);
      border: none;
      border-radius: 50%;
      font-size: 1.2rem;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 1000;
      box-shadow: 0 4px 15px rgba(34, 163, 159, 0.4);
    `;

    document.body.appendChild(this.button);

    // نمایش/مخفی کردن دکمه
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        this.button.style.opacity = "1";
        this.button.style.visibility = "visible";
      } else {
        this.button.style.opacity = "0";
        this.button.style.visibility = "hidden";
      }
    });

    // کلیک روی دکمه
    this.button.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    // Hover effect
    this.button.addEventListener("mouseenter", () => {
      this.button.style.transform = "translateY(-5px)";
    });

    this.button.addEventListener("mouseleave", () => {
      this.button.style.transform = "translateY(0)";
    });
  },
};

/* ====================================================================
   ۱۶. Parallax Effect (اختیاری)
   ==================================================================== */
const parallax = {
  elements: document.querySelectorAll(".parallax"),

  init() {
    if (this.elements.length === 0) return;

    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;

      this.elements.forEach((el) => {
        const speed = el.dataset.speed || 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    });
  },
};

/* ====================================================================
   ۱۷. Copy to Clipboard (برای ایمیل و...)
   ==================================================================== */
const clipboard = {
  init() {
    document.addEventListener("click", (e) => {
      if (e.target.closest("[data-clipboard]")) {
        const element = e.target.closest("[data-clipboard]");
        const text = element.dataset.clipboard;

        this.copy(text, element);
      }
    });
  },

  copy(text, element) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        this.showTooltip(element, "کپی شد!");
      })
      .catch((err) => {
        console.error("خطا در کپی کردن:", err);
      });
  },

  showTooltip(element, message) {
    const tooltip = document.createElement("div");
    tooltip.textContent = message;
    tooltip.style.cssText = `
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--color-primary);
      color: var(--color-dark);
      padding: 0.5rem 1rem;
      border-radius: 5px;
      font-size: 0.875rem;
      font-weight: 600;
      white-space: nowrap;
      pointer-events: none;
      z-index: 9999;
    `;

    element.style.position = "relative";
    element.appendChild(tooltip);

    setTimeout(() => {
      tooltip.remove();
    }, 2000);
  },
};

/* ====================================================================
   ۱۸. Performance Monitoring (اختیاری)
   ==================================================================== */
const performance = {
  init() {
    if ("performance" in window) {
      window.addEventListener("load", () => {
        setTimeout(() => {
          const perfData = window.performance.timing;
          const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

          console.log(
            "%c📊 Performance Metrics",
            "color: #22a39f; font-weight: bold; font-size: 14px;"
          );
          console.log("Page Load Time:", pageLoadTime + "ms");
          console.log(
            "DOM Content Loaded:",
            perfData.domContentLoadedEventEnd - perfData.navigationStart + "ms"
          );
        }, 0);
      });
    }
  },
};

/* ====================================================================
   ۱۹. Easter Egg (برای خودت! 🎉)
   ==================================================================== */
const easterEgg = {
  init() {
    let konami = [];
    const konamiCode = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];

    document.addEventListener("keydown", (e) => {
      konami.push(e.key);
      konami = konami.slice(-konamiCode.length);

      if (konami.join("") === konamiCode.join("")) {
        this.activate();
      }
    });
  },

  activate() {
    console.log(
      "%c🎉 Easter Egg Activated!",
      "color: #22a39f; font-weight: bold; font-size: 20px;"
    );
    console.log(
      "%cساخته شده با ❤️ توسط میلاد گلی",
      "color: #fff; font-size: 14px;"
    );

    // یک افکت جالب اضافه کن!
    document.body.style.transition = "transform 0.5s ease";
    document.body.style.transform = "rotate(360deg)";

    setTimeout(() => {
      document.body.style.transform = "rotate(0deg)";
    }, 500);
  },
};

/* ====================================================================
   ۲۰. Theme Switcher (اختیاری - برای نسخه‌های بعدی)
   ==================================================================== */
const themeSwitcher = {
  button: null,
  currentTheme: "dark",

  init() {
    // فعلاً فقط dark theme داریم
    // می‌تونی بعداً light theme اضافه کنی

    const savedTheme = localStorage.getItem("theme") || "dark";
    this.setTheme(savedTheme);
  },

  setTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  },
};

/* ====================================================================
   🚀 INITIALIZATION - اجرای همه قابلیت‌ها
   ==================================================================== */

// وقتی DOM آماده شد
document.addEventListener("DOMContentLoaded", () => {
  console.log(
    "%c🚀 Portfolio Initialized",
    "color: #22a39f; font-weight: bold; font-size: 16px;"
  );

  // Core Features
  cursor.init();
  scrollProgress.init();
  header.init();
  mobileMenu.init();
  particlesConfig.init();
  typewriter.init();
  counterAnimation.init();
  scrollAnimations.init();

  // Portfolio Features
  portfolioFilter.init();
  imageViewer.init();

  // Forms & Interactions
  contactForm.init();
  smoothScroll.init();
  lazyLoad.init();

  // Optional Features
  backToTop.init();
  parallax.init();
  clipboard.init();
  themeSwitcher.init();
  performance.init();
  easterEgg.init();

  console.log(
    "%c✅ All Features Loaded Successfully",
    "color: #10b981; font-weight: bold;"
  );
});

/* ====================================================================
   🎯 UTILITY FUNCTIONS
   ==================================================================== */

// Debounce Function
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Throttle Function
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Random Number Generator
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/* ====================================================================
   🐛 ERROR HANDLING
   ==================================================================== */

window.addEventListener("error", (e) => {
  console.error("Global Error:", e.message);
  // می‌تونی به یک سرویس لاگ بفرستی
});

window.addEventListener("unhandledrejection", (e) => {
  console.error("Unhandled Promise Rejection:", e.reason);
  // می‌تونی به یک سرویس لاگ بفرستی
});

/* ====================================================================
   IMAGE LIGHTBOX - Gallery System
   ==================================================================== */
/* ====================================================================
   ADVANCED IMAGE VIEWER - Professional Gallery
   ==================================================================== */
const imageViewer = {
  viewer: null,
  overlay: null,
  closeBtn: null,
  prevBtn: null,
  nextBtn: null,
  image: null,
  imageWrapper: null,
  imageContainer: null,
  title: null,
  description: null,
  category: null,
  currentCounter: null,
  totalCounter: null,
  zoomLevel: null,
  loading: null,
  sidebar: null,

  images: [],
  currentIndex: 0,

  // Zoom & Pan
  scale: 1,
  rotation: 0,
  translateX: 0,
  translateY: 0,
  isDragging: false,
  startX: 0,
  startY: 0,

  init() {
    this.viewer = document.getElementById("imageViewer");
    if (!this.viewer) return;

    this.overlay = this.viewer.querySelector(".viewer-overlay");
    this.closeBtn = this.viewer.querySelector(".viewer-close");
    this.prevBtn = this.viewer.querySelector(".viewer-prev");
    this.nextBtn = this.viewer.querySelector(".viewer-next");
    this.image = document.getElementById("viewerImage");
    this.imageWrapper = this.viewer.querySelector(".viewer-image-wrapper");
    this.imageContainer = this.viewer.querySelector(".viewer-image-container");
    this.title = document.getElementById("viewerTitle");
    this.description = document.getElementById("viewerDescription");
    this.category = document.getElementById("viewerCategory");
    this.currentCounter = document.getElementById("viewerCurrent");
    this.totalCounter = document.getElementById("viewerTotal");
    this.zoomLevel = document.getElementById("viewerZoomLevel");
    this.loading = this.viewer.querySelector(".viewer-loading");
    this.sidebar = this.viewer.querySelector(".viewer-sidebar");

    this.bindEvents();
  },

  bindEvents() {
    // Click on images
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("lightbox-trigger")) {
        e.preventDefault();
        this.open(e.target);
      }

      const portfolioItem = e.target.closest(".portfolio-item");
      if (portfolioItem) {
        const img = portfolioItem.querySelector(".lightbox-trigger");
        if (img) {
          e.preventDefault();
          this.open(img);
        }
      }
    });

    // Close
    this.closeBtn?.addEventListener("click", () => this.close());
    this.overlay?.addEventListener("click", () => this.close());

    // Navigation
    this.prevBtn?.addEventListener("click", () => this.prev());
    this.nextBtn?.addEventListener("click", () => this.next());

    // Zoom controls
    document
      .getElementById("viewerZoomIn")
      ?.addEventListener("click", () => this.zoomIn());
    document
      .getElementById("viewerZoomOut")
      ?.addEventListener("click", () => this.zoomOut());
    document
      .getElementById("viewerZoomReset")
      ?.addEventListener("click", () => this.resetZoom());

    // Rotate
    document
      .getElementById("viewerRotateLeft")
      ?.addEventListener("click", () => this.rotate(-90));
    document
      .getElementById("viewerRotateRight")
      ?.addEventListener("click", () => this.rotate(90));

    // Fullscreen
    document
      .getElementById("viewerFullscreen")
      ?.addEventListener("click", () => this.toggleFullscreen());

    // Mouse wheel zoom
    this.imageContainer?.addEventListener("wheel", (e) => {
      e.preventDefault();
      if (e.deltaY < 0) {
        this.zoomIn();
      } else {
        this.zoomOut();
      }
    });

    // Pan (drag)
    this.imageContainer?.addEventListener("mousedown", (e) =>
      this.startDrag(e)
    );
    this.imageContainer?.addEventListener("mousemove", (e) => this.drag(e));
    this.imageContainer?.addEventListener("mouseup", () => this.endDrag());
    this.imageContainer?.addEventListener("mouseleave", () => this.endDrag());

    // Touch support
    this.imageContainer?.addEventListener("touchstart", (e) =>
      this.startDrag(e)
    );
    this.imageContainer?.addEventListener("touchmove", (e) => this.drag(e));
    this.imageContainer?.addEventListener("touchend", () => this.endDrag());

    // Keyboard
    document.addEventListener("keydown", (e) => {
      if (!this.viewer.classList.contains("active")) return;

      switch (e.key) {
        case "Escape":
          this.close();
          break;
        case "ArrowRight":
          this.prev(); // RTL
          break;
        case "ArrowLeft":
          this.next(); // RTL
          break;
        case "+":
        case "=":
          this.zoomIn();
          break;
        case "-":
        case "_":
          this.zoomOut();
          break;
        case "0":
          this.resetZoom();
          break;
        case "f":
        case "F":
          this.toggleFullscreen();
          break;
      }
    });
  },

  open(trigger) {
    const group = trigger.getAttribute("data-lightbox-group") || "default";
    this.images = Array.from(
      document.querySelectorAll(
        `.lightbox-trigger[data-lightbox-group="${group}"]`
      )
    );

    this.currentIndex = this.images.indexOf(trigger);

    this.viewer.classList.add("active");
    document.body.style.overflow = "hidden";

    // مخفی کردن custom cursor
    const customCursor = document.querySelector(".custom-cursor");
    if (customCursor) customCursor.style.display = "none";

    this.loadImage(this.currentIndex);
    this.updateCounter();

    // Show sidebar on mobile
    if (window.innerWidth <= 1024) {
      setTimeout(() => {
        this.sidebar?.classList.add("active");
      }, 300);
    }
  },

  close() {
    this.viewer.classList.remove("active");
    document.body.style.overflow = "auto";
    this.resetTransform();

    // نمایش custom cursor
    const customCursor = document.querySelector(".custom-cursor");
    if (customCursor) customCursor.style.display = "block";

    // Hide sidebar on mobile
    this.sidebar?.classList.remove("active");
  },

  loadImage(index) {
    const trigger = this.images[index];
    if (!trigger) return;

    this.loading.classList.add("active");

    const src = trigger.src || trigger.getAttribute("src");
    const title =
      trigger.getAttribute("data-lightbox-title") || trigger.alt || "تصویر";
    const description = trigger.getAttribute("data-lightbox-description") || "";
    const category = trigger.getAttribute("data-lightbox-category") || "";

    const img = new Image();
    img.onload = () => {
      this.image.src = src;
      this.title.textContent = title;
      this.description.textContent = description;

      if (category) {
        this.category.textContent = category;
        this.category.style.display = "inline-block";
      } else {
        this.category.style.display = "none";
      }

      this.loading.classList.remove("active");
      this.resetTransform();
    };
    img.src = src;

    this.updateNavigation();
  },

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.loadImage(this.currentIndex);
      this.updateCounter();
    }
  },

  next() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
      this.loadImage(this.currentIndex);
      this.updateCounter();
    }
  },

  updateNavigation() {
    this.prevBtn.disabled = this.currentIndex === 0;
    this.nextBtn.disabled = this.currentIndex === this.images.length - 1;

    if (this.images.length <= 1) {
      this.prevBtn.style.display = "none";
      this.nextBtn.style.display = "none";
    } else {
      this.prevBtn.style.display = "flex";
      this.nextBtn.style.display = "flex";
    }
  },

  updateCounter() {
    this.currentCounter.textContent = this.currentIndex + 1;
    this.totalCounter.textContent = this.images.length;
  },

  zoomIn() {
    this.scale = Math.min(this.scale + 0.25, 3);
    this.updateTransform();
  },

  zoomOut() {
    this.scale = Math.max(this.scale - 0.25, 0.5);
    this.updateTransform();
  },

  resetZoom() {
    this.resetTransform();
  },

  rotate(deg) {
    this.rotation += deg;
    this.updateTransform();
  },

  resetTransform() {
    this.scale = 1;
    this.rotation = 0;
    this.translateX = 0;
    this.translateY = 0;
    this.updateTransform();
  },

  updateTransform() {
    this.imageWrapper.style.transform = `
      translate(${this.translateX}px, ${this.translateY}px)
      scale(${this.scale})
      rotate(${this.rotation}deg)
    `;
    this.zoomLevel.textContent = Math.round(this.scale * 100) + "%";
  },

  startDrag(e) {
    if (this.scale <= 1) return;

    this.isDragging = true;
    this.imageContainer.classList.add("dragging");

    const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
    const clientY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;

    this.startX = clientX - this.translateX;
    this.startY = clientY - this.translateY;
  },

  drag(e) {
    if (!this.isDragging) return;

    e.preventDefault();

    const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
    const clientY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;

    this.translateX = clientX - this.startX;
    this.translateY = clientY - this.startY;

    this.updateTransform();
  },

  endDrag() {
    this.isDragging = false;
    this.imageContainer.classList.remove("dragging");
  },

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      this.viewer.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  },
};
/* ====================================================================
   END OF JAVASCRIPT
   ==================================================================== */
