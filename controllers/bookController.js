//creates a constant and sets that constant to  resolve libraries and modules in the Node search path. Basically makes available other functions available in this code set even
//though the code is elsewhere.
const db = require("../models");

// Defining methods for the bookController
//findAll does a simple query to find everything and then passes the results to res.json
//findbyID does the same thing but takes in req.params.id and passes the results back to res.json
//if there is an error it will report it as 422 status
//create takes the req.body and creates a new entry then passes the remaining results back to res.json
//update simply updates the db using the id passed by req.params.id and then replaces the existing data by what's in req.body
//remove finds the id via req.params.id and then removes the mongo entry of that id 
module.exports = {
  findAll: function(req, res) {
    db.Book.find(req.query)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book.create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  }
};
