const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
// const apiRoutes = require("./routes/index");

// const { sendBasicEmail } = require("./services/email-service");

const db = require("./models/index");

const setUpAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  //   app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    // sendBasicEmail(
    //   "support@gmail.com",
    //   "vishnumouli0@gmail.com",
    //   "This is the testing mail for Airline Management System",
    //   "Hello How's it going?"
    // );

    console.log(`Server Started at Port: ${PORT}`);
    if (process.env.DB_SYNC) {
      db.sequelize.sync({ alter: true });
    }
  });
};

setUpAndStartServer();
