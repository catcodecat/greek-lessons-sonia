const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuToggle.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const fields = contactForm.elements;
    const name = fields.name.value.trim();
    const email = fields.email.value.trim();
    const level = fields.level.value.trim();
    const goal = fields.goal.value.trim();
    const message = fields.message.value.trim();

    if (!name || !email || !level || !goal || !message) {
      formMessage.textContent = "Merci de remplir tous les champs avant d’envoyer la demande.";
      formMessage.className = "form-message error";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      formMessage.textContent = "Merci d’indiquer une adresse email valide.";
      formMessage.className = "form-message error";
      return;
    }

    formMessage.textContent = "Votre demande a bien été préparée. Sonia Line pourra vous répondre prochainement.";
    formMessage.className = "form-message success";
    contactForm.reset();
  });
}

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

document.querySelectorAll(".faq-list details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) {
      return;
    }

    document.querySelectorAll(".faq-list details").forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.removeAttribute("open");
      }
    });
  });
});
