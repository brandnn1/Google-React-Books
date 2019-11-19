//creates a constant and sets that constant to  resolve libraries and modules in the Node search path. Basically makes available other functions available in this code set even
//though the code is elsewhere.
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
//tells the express router where the api routes are going to be so when they are called it knows there to route.  
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

//exports the above code to be used elsewhere if "required"
module.exports = router;
