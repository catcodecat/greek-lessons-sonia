const path = require("node:path");
const express = require("express");
const {
  createBooking,
  createContact,
  listBookings,
  listContacts,
} = require("./database");

const app = express();
const port = Number(process.env.PORT) || 4173;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));

function sanitizeText(value) {
  return String(value || "").trim();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateRequired(fields) {
  const errors = {};

  Object.entries(fields).forEach(([key, value]) => {
    if (!sanitizeText(value)) {
      errors[key] = "Ce champ est obligatoire.";
    }
  });

  if (fields.email && !isValidEmail(sanitizeText(fields.email))) {
    errors.email = "Adresse email invalide.";
  }

  return errors;
}

app.post("/api/bookings", (req, res) => {
  const payload = {
    name: sanitizeText(req.body.name),
    email: sanitizeText(req.body.email),
    level: sanitizeText(req.body.level),
    goal: sanitizeText(req.body.goal),
    message: sanitizeText(req.body.message),
  };
  const errors = validateRequired(payload);

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ message: "La demande est incomplète.", errors });
  }

  const booking = createBooking(payload);

  createContact({
    name: payload.name,
    email: payload.email,
    subject: `Réservation - ${payload.goal}`,
    message: payload.message,
  });

  return res.status(201).json({
    message: "Votre demande de cours a bien été enregistrée.",
    booking,
  });
});

app.post("/api/contacts", (req, res) => {
  const payload = {
    name: sanitizeText(req.body.name),
    email: sanitizeText(req.body.email),
    subject: sanitizeText(req.body.subject || "Message de contact"),
    message: sanitizeText(req.body.message),
  };
  const errors = validateRequired(payload);

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ message: "Le message est incomplet.", errors });
  }

  const contact = createContact(payload);

  return res.status(201).json({
    message: "Votre message a bien été enregistré.",
    contact,
  });
});

app.get("/api/bookings", (req, res) => {
  res.json({ bookings: listBookings() });
});

app.get("/api/contacts", (req, res) => {
  res.json({ contacts: listContacts() });
});

app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "admin.html"));
});

app.use("/api", (req, res) => {
  res.status(404).json({ message: "Route API introuvable." });
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://127.0.0.1:${port}`);
});
