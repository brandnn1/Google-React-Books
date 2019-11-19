//creates a constant and sets that constant to  resolve libraries and modules in the Node search path. Basically makes available other functions available in this code set even
//though the code is elsewhere.
const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// Matches with "/api/google"
//when accessing the root route it kicks off a get function using the google controller function above, and calling the findAll option
router
  .route("/")
  .get(googleController.findAll);

  //exports the above code as router to be used elsewhere
module.exports = router;
