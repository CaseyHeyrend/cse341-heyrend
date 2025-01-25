const mongodb = require("../database/connect");
const ObjectId = require("mongodb").ObjectId;

const contactsController = {}

// the data for hmtl page
contactsController.getData = async function (req, res, next) {
  const result = await mongodb.getDb().db().collection("contacts").find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};

contactsController.getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection("contacts").find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};

contactsController. getById = async (req, res, next) => {
  // const userId = new ObjectId(req.params.id);
  const userId = ObjectId.createFromHexString(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection("contacts")
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists[0]);
  });
};
// Week 3
// Create - Post to insert Contact 
contactsController.createContact = async (req, res, next) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongodb
  .getDb()
  .db()
  .collection("contacts").insertOne(contact);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || "Some error occurred while creating the contact.");
  }
};
// Updating the Contact
contactsController.updateContactById = async (req, res, next) => {
  const userId = ObjectId.createFromHexString(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };
  const response = await mongodb
  .getDb()
  .db()
  .collection("contacts")
  .replaceOne({ _id: userId }, contact);
console.log(response);
if (response.modifiedCount > 0) {
  res.status(204).send();
} else {
  res.status(500).json(response.error || "Some error occurred while updating the contact.");
}
}
contactsController.deleteContactById = async (req, res, next) =>{
  const userId = ObjectId.createFromHexString(req.params.id);
  const response = await mongodb
  .getDb()
  .db()
  .collection("contacts")
  .remove({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || "Some error occurred while deleting the contact.");
  }

}
module.exports = contactsController