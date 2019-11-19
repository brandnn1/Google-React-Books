
//creates a constant and sets that constant to  resolve libraries and modules in the Node search path. Basically makes available other functions available in this code set even
//though the code is elsewhere. uses mongoose and the mongoose schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//sets the bookschema to a new db structure. Each mongodb element will contain the following 
const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

//sets the Book constant to the mongoose model function, naming it "Book" and using the above schema
const Book = mongoose.model("Book", bookSchema);

//exports Book
module.exports = Book;
