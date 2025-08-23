import Contact from "../model/contact.model.js";

// Add new contact message
export const addContact = async (req, res) => {
  try {
    const { fullname, email, message } = req.body;
    const newContact = new Contact({ fullname, email, message });
    await newContact.save();
    res.status(201).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error saving message", error });
  }
};

// Get all messages (for admin)
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching contacts", error });
  }
};
