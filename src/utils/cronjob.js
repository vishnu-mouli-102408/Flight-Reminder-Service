const cron = require("node-cron");
const sender = require("../config/emailConfig");

const EmailService = require("../services/email-service");

const setupJobs = () => {
  cron.schedule("*/1 * * * *", async () => {
    // console.log("running task every 5 minutes");
    const response = await EmailService.fetchPendingEmails();
    response.forEach((email) => {
      sender.sendMail(
        {
          to: email.recipientEmail,
          subject: email.subject,
          text: email.content,
        },
        async (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
            await EmailService.updateTicket(email.id, { status: "SUCCESS" });
          }
        }
      );
    });
    console.log(response);
  });
};

module.exports = setupJobs;
