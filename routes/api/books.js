//creates a constant and sets that constant to  resolve libraries and modules in the Node search path. Basically makes available other functions available in this code set even
//though the code is elsewhere.
const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// Matches with "/api/books"
//two things are goin gon here. When this route is accessed with the get function it kicks off a get function using the book controller function above, and calling the findAll option
router.route("/")
  .get(bookController.findAll)
  .post(bookController.create);

// Matches with "/api/books/:id"
//if the get route is called, it executes a findbyID query based on the req.params.id passed
//if the put route is called, it will execute the update function based on the req.params.id
//if the delete route is called, it will execute the remove function. 
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

module.exports = router;
