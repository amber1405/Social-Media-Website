//require the library
const mongoose = require('mongoose');

// connect to the database
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/contact_list_db');
  console.log("Successfully Connected to the database::MongoDB");
}
const db=mongoose.connection;

module.exports=db;