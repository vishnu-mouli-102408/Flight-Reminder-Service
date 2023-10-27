const sender = require("../config/emailConfig");

const EmailRepository = require("../repository/email-repository");

const repo = new EmailRepository();

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
  try {
    const response = await sender.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: mailSubject,
      text: mailBody,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const fetchPendingEmails = async () => {
  try {
    const response = await repo.getTicket({ status: "PENDING" });
    return response;
  } catch (error) {
    console.log("Error occured in Service Layer");
    throw error;
  }
};

const createNotification = async (data) => {
  try {
    const response = await repo.createTicket(data);
    console.log(response);
    return response;
  } catch (error) {
    console.log("Error occured in Service Layer");
    throw error;
  }
};

const updateTicket = async (ticketId, data) => {
  try {
    const response = await repo.updateTicket(ticketId, data);
    return response;
  } catch (error) {
    console.log("Error occured in Service Layer");
    throw error;
  }
};

const subscribeEvents = async (payload) => {
  try {
    let service = payload.service;
    const data = payload.data;
    switch (service) {
      case "CREATE_TICKET":
        await createNotification(data);
        break;
      case "SEND_BASIC_MAIL":
        await sendBasicEmail(data);
        break;
      default:
        console.log("No valid event Received");
        break;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  sendBasicEmail,
  fetchPendingEmails,
  createNotification,
  updateTicket,
  subscribeEvents,
};
