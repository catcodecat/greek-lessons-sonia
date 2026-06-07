function formatDate(value) {
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(`${value}Z`));
}

function renderItems(container, items, type) {
  if (!items.length) {
    container.innerHTML = "<p>Aucune donnée enregistrée pour le moment.</p>";
    return;
  }

  container.innerHTML = items
    .map((item) => {
      const title = type === "booking" ? item.goal : item.subject;
      const meta = type === "booking" ? `Niveau : ${item.level}` : "Message";

      return `
        <article class="admin-item">
          <div>
            <h3>${escapeHtml(item.name)}</h3>
            <p><strong>${escapeHtml(title)}</strong></p>
            <p>${escapeHtml(meta)}</p>
            <p>${escapeHtml(item.message)}</p>
          </div>
          <p>
            <a href="mailto:${encodeURIComponent(item.email)}">${escapeHtml(item.email)}</a><br>
            <span>${formatDate(item.created_at)}</span>
          </p>
        </article>
      `;
    })
    .join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function loadAdminData() {
  const bookingsList = document.querySelector("#bookings-list");
  const contactsList = document.querySelector("#contacts-list");

  try {
    const [bookingsResponse, contactsResponse] = await Promise.all([
      fetch("/api/bookings"),
      fetch("/api/contacts"),
    ]);

    if (!bookingsResponse.ok || !contactsResponse.ok) {
      throw new Error("Impossible de charger les données.");
    }

    const [{ bookings }, { contacts }] = await Promise.all([
      bookingsResponse.json(),
      contactsResponse.json(),
    ]);

    renderItems(bookingsList, bookings, "booking");
    renderItems(contactsList, contacts, "contact");
  } catch (error) {
    bookingsList.innerHTML = "<p>Erreur de chargement des réservations.</p>";
    contactsList.innerHTML = "<p>Erreur de chargement des messages.</p>";
  }
}

loadAdminData();
