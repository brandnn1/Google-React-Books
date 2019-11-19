//creates a constant and sets that constant to  resolve libraries and modules in the Node search path. Basically makes available other functions available in this code set even
//though the code is elsewhere.
const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
//this is a middleware function that acts as an intermediate between client side and server side
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
//is an if statement where if the environment is set to production then it uses the express middleware function static to serve files up
//The file to serve will be determined by combining req.url with the provided root directory. 
//When a file is not found, instead of sending a 404 response, this module will instead call next() to move on to the next middleware, allowing for stacking and fall-backs.
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view 
//uses the express use function being passed routes which is tied above to a folder location ./routes
app.use(routes);

// Connect to the Mongo DB
//passes a connection string with username/password info to connect to the Mongo DB. 
//within the connection there are two parameters passed to create an index and to use a new URL parser instead of the deprecated one.
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://user1:password1@ds125871.mlab.com:25871/heroku_0xn0jnk7",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// Start the API server
//After a successful connection the listener starts and console logs a message letting the dev know the connection is now live on x port.In this case port 3001 would be used
//since it is not in a production environment. otherwise the designated port by heroku would be listed. 
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
