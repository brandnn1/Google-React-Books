//creates a constant and sets that constant to  resolve libraries and modules in the Node search path. Basically makes available other functions available in this code set even
//though the code is elsewhere.
const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");

// Book routes
//tells the express router where the book routes are going to be so when they are called it knows there to route.  
router.use("/books", bookRoutes);

// Google Routes
//tells the express router where the google routes are going to be so when they are called it knows there to route.  
router.use("/google", googleRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
