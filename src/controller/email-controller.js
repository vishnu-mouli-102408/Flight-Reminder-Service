const EmailService = require("../services/email-service");

const create = async (req, res) => {
  try {
    const response = await EmailService.createNotification(req.body);
    console.log(response);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully Created Notification Ticket",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Couldn't Create Notification Ticket",
      err: error,
    });
  }
};

module.exports = {
  create,
};
