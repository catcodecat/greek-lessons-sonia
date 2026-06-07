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
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const fields = contactForm.elements;
    const payload = {
      name: fields.name.value.trim(),
      email: fields.email.value.trim(),
      level: fields.level.value.trim(),
      goal: fields.goal.value.trim(),
      message: fields.message.value.trim(),
    };

    if (!payload.name || !payload.email || !payload.level || !payload.goal || !payload.message) {
      formMessage.textContent = "Merci de remplir tous les champs avant d’envoyer la demande.";
      formMessage.className = "form-message error";
      return;
    }

    if (!payload.email.includes("@") || !payload.email.includes(".")) {
      formMessage.textContent = "Merci d’indiquer une adresse email valide.";
      formMessage.className = "form-message error";
      return;
    }

    formMessage.textContent = "Envoi de la demande en cours...";
    formMessage.className = "form-message";

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "La demande n'a pas pu être enregistrée.");
      }

      formMessage.textContent = result.message;
      formMessage.className = "form-message success";
      contactForm.reset();
    } catch (error) {
      formMessage.textContent = "Impossible d'enregistrer la demande pour le moment.";
      formMessage.className = "form-message error";
    }
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
