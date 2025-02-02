const express = require("express");
const router = express.Router();
const contactsController = require("../controllers/contacts");

// Get all the contacts
router.get("/", contactsController.getAll);
// Get a concact by id
router.get("/:id", contactsController.getById);
// Week 3
// Create or insert a contact into the database
router.post("/", contactsController.createContact);
// Update contact by id
router.put("/:id", contactsController.updateContactById);
// Delete contact by id
router.delete("/:id", contactsController.deleteContactById);

module.exports = router;