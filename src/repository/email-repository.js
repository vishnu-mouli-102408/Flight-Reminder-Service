const { NotificationTicket } = require("../models/index");
const { Op } = require("sequelize");

class EmailRepository {
  async getAllTickets() {
    try {
      const tickets = await NotificationTicket.findAll();
      return tickets;
    } catch (error) {
      console.log("Error in repository Layer");
      throw error;
    }
  }

  async createTicket(data) {
    try {
      const ticket = await NotificationTicket.create(data);
      // console.log(ticket);
      return ticket;
    } catch (error) {
      console.log("Error in repository Layer");
      throw error;
    }
  }

  async getTicket(filter) {
    try {
      const tickets = await NotificationTicket.findAll({
        where: {
          status: filter.status,
          notificationTime: {
            [Op.lte]: new Date(),
          },
        },
      });
      return tickets;
    } catch (error) {
      console.log("Error in repository Layer");
      throw error;
    }
  }

  async updateTicket(ticketId, data) {
    try {
      const response = await NotificationTicket.findByPk(ticketId);
      if (data.status) {
        response.status = data.status;
      }
      await response.save();
      return response;
    } catch (error) {
      console.log("Error in repository Layer");
      throw error;
    }
  }
}

module.exports = EmailRepository;
