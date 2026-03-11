const serverless = require("serverless-http");
const app = require("../app");

module.exports = serverless(app);


//Solo para conexión local:

// const app = require('./app');

// const PORT = 5020 || 5001;

// app.listen(PORT, () => {
//   console.log(`Listening http://localhost:${PORT}`);
// });



