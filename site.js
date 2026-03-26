(function () {
  const schedule = {
    monday: [],
    tuesday: [["07:00", "19:00"]],
    wednesday: [["07:00", "19:00"]],
    thursday: [["07:00", "19:00"]],
    friday: [["07:00", "19:00"]],
    saturday: [["07:00", "19:00"]],
    sunday: [["07:00", "12:30"]],
  };

  function updateStatus() {
    const label = document.querySelector("[data-status-label]");
    const detail = document.querySelector("[data-status-detail]");
    const rows = document.querySelectorAll("[data-day]");

    if (!label || !detail) {
      return;
    }

    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Paris",
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    });

    const parts = formatter.formatToParts(new Date());
    const day = parts.find(function (part) {
      return part.type === "weekday";
    }).value.toLowerCase();
    const hour = parts.find(function (part) {
      return part.type === "hour";
    }).value;
    const minute = parts.find(function (part) {
      return part.type === "minute";
    }).value;
    const now = hour + ":" + minute;
    const intervals = schedule[day] || [];

    rows.forEach(function (row) {
      if (row.getAttribute("data-day") === day) {
        row.classList.add("is-today");
      }
    });

    if (intervals.length && now >= intervals[0][0] && now <= intervals[0][1]) {
      label.textContent = "Ouvert maintenant";
      detail.textContent = "Fermeture a " + intervals[0][1];
      return;
    }

    if (intervals.length && now < intervals[0][0]) {
      label.textContent = "Ouvre aujourd'hui";
      detail.textContent = "Ouverture a " + intervals[0][0];
      return;
    }

    label.textContent = "Ferme pour le moment";
    detail.textContent = "Voir les horaires";
  }

  function initHeroSlider() {
    const slider = document.querySelector("[data-hero-slider]");
    if (!slider || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const slides = Array.from(slider.querySelectorAll(".hero__slide"));
    const title = document.querySelector("[data-hero-title]");
    const text = document.querySelector("[data-hero-text]");

    if (!slides.length || !title || !text) {
      return;
    }

    let index = 0;

    function activate(nextIndex) {
      slides.forEach(function (slide, currentIndex) {
        slide.classList.toggle("is-active", currentIndex === nextIndex);
      });

      title.textContent = slides[nextIndex].getAttribute("data-title") || title.textContent;
      text.textContent = slides[nextIndex].getAttribute("data-text") || text.textContent;
      index = nextIndex;
    }

    activate(0);

    window.setInterval(function () {
      activate((index + 1) % slides.length);
    }, 4500);
  }

  function initGallery() {
    const featured = document.querySelector("[data-featured-image]");
    const lightboxTarget = document.querySelector("[data-lightbox-target]");
    const thumbs = Array.from(document.querySelectorAll("[data-thumb-src]"));

    if (!featured || !thumbs.length) {
      return;
    }

    thumbs.forEach(function (thumb) {
      thumb.addEventListener("click", function () {
        thumbs.forEach(function (item) {
          item.classList.remove("is-active");
        });

        thumb.classList.add("is-active");
        featured.setAttribute("src", thumb.getAttribute("data-thumb-src"));
        featured.setAttribute("alt", thumb.getAttribute("data-thumb-alt") || "");
        if (lightboxTarget) {
          lightboxTarget.setAttribute("src", thumb.getAttribute("data-thumb-src"));
          lightboxTarget.setAttribute("alt", thumb.getAttribute("data-thumb-alt") || "");
        }
      });
    });
  }

  function initLightbox() {
    const lightbox = document.querySelector("[data-lightbox]");
    const featured = document.querySelector("[data-featured-image]");
    const lightboxImage = document.querySelector("[data-lightbox-target]");
    const close = document.querySelector("[data-lightbox-close]");

    if (!lightbox || !lightboxImage || !featured || !close) {
      return;
    }

    featured.addEventListener("click", function () {
      lightboxImage.setAttribute("src", featured.getAttribute("src") || "");
      lightboxImage.setAttribute("alt", featured.getAttribute("alt") || "");
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
    });

    close.addEventListener("click", function () {
      lightbox.classList.remove("is-open");
      document.body.style.overflow = "";
    });

    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) {
        lightbox.classList.remove("is-open");
        document.body.style.overflow = "";
      }
    });
  }

  function initDemoForm() {
    const form = document.querySelector("[data-demo-form]");
    const status = document.querySelector("[data-form-status]");

    if (!form || !status) {
      return;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      status.textContent =
        "Maquette de formulaire prete. Pour une mise en ligne reelle, il faudra brancher l'envoi email.";
    });
  }

  updateStatus();
  initHeroSlider();
  initGallery();
  initLightbox();
  initDemoForm();
})();
