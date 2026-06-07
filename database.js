const fs = require("node:fs");
const path = require("node:path");
const { DatabaseSync } = require("node:sqlite");

const dataDir = path.join(__dirname, "data");
const databasePath = path.join(dataDir, "app.sqlite");

fs.mkdirSync(dataDir, { recursive: true });

const db = new DatabaseSync(databasePath);

db.exec(`
  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    level TEXT NOT NULL,
    goal TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'new',
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
`);

function createBooking({ name, email, level, goal, message }) {
  const result = db
    .prepare(`
      INSERT INTO bookings (name, email, level, goal, message)
      VALUES (?, ?, ?, ?, ?)
    `)
    .run(name, email, level, goal, message);

  return getBooking(result.lastInsertRowid);
}

function createContact({ name, email, subject, message }) {
  const result = db
    .prepare(`
      INSERT INTO contacts (name, email, subject, message)
      VALUES (?, ?, ?, ?)
    `)
    .run(name, email, subject, message);

  return getContact(result.lastInsertRowid);
}

function getBooking(id) {
  return db.prepare("SELECT * FROM bookings WHERE id = ?").get(id);
}

function getContact(id) {
  return db.prepare("SELECT * FROM contacts WHERE id = ?").get(id);
}

function listBookings() {
  return db.prepare("SELECT * FROM bookings ORDER BY created_at DESC, id DESC").all();
}

function listContacts() {
  return db.prepare("SELECT * FROM contacts ORDER BY created_at DESC, id DESC").all();
}

module.exports = {
  createBooking,
  createContact,
  listBookings,
  listContacts,
};
