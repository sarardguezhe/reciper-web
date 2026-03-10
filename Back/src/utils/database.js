const mongoose = require("mongoose");

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null };
}

const connect = async () => {
  if (cached.conn) return cached.conn;

  cached.conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  return cached.conn;
};

module.exports = { connect };



// const mongoose = require('mongoose');
// const dotenv = require('dotenv').config();

// const DB_URL= process.env.DB_URI;

// const connect = async () => {

//   try {

//     const db = await mongoose.connect(DB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     const { name, host } = db.connection;

//     console.log(`Connect to: ${name} DB. Host: ${host}`);

//   } catch (error) {

//     console.log(`Error connecting the DB: ${error}`);

//   }
// };

// module.exports = { connect };