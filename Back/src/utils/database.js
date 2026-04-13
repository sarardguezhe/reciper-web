const mongoose = require("mongoose");


const DB_URL= process.env.DB_URI;

const connect = async () => {

  try {

    const db = await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const { name, host } = db.connection;

    console.log(`Connect to: ${name} DB. Host: ${host}`);

  } catch (error) {

    console.log(`Error connecting the DB: ${error}`);

  };
};

module.exports = { connect };