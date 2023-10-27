const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");

const setupJobs = require("./utils/cronjob");

const db = require("./models/index");

const EmailService = require("./services/email-service");
const { REMINDER_BINDING_KEY } = require("./config/serverConfig");
const { subscribeChannel, createChannel } = require("./utils/messageQueue");

const setUpAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  const channel = await createChannel();
  subscribeChannel(channel, EmailService.subscribeEvents, REMINDER_BINDING_KEY);

  app.listen(PORT, async () => {
    setupJobs();
    console.log(`Server Started at Port: ${PORT}`);
    if (process.env.DB_SYNC) {
      db.sequelize.sync({ alter: true });
    }
  });
};

setUpAndStartServer();
