import express from "express";
import { addContact, getContacts } from "../controller/contact.controller.js";

const router = express.Router();

// Route for adding a new contact
router.post("/", addContact);

// Route for fetching all contacts (admin only)
router.get("/", getContacts);

export default router;
