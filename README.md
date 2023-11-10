# Flight Reminder Service

## Overview

The Flight Reminder Service is a microservice in the Airline Management system responsible for sending notification emails to users for various events such as onboarding, booking confirmation, etc. It leverages message queues using the RabbitMQ library, implements cron jobs with Node Cron, uses AMQP Lin as a messaging service, and employs Node Mailer for sending emails. The service stores relevant information in a PostgreSQL database, utilizing Sequelize as the ORM and Sequelize CLI for migrations.

## Features

- **Notification Emails**: Sends notification emails to users for events like onboarding and booking confirmation.
- **Message Queues with RabbitMQ**: Utilizes RabbitMQ for managing message queues to handle email notifications asynchronously.
- **Cron Jobs with Node Cron**: Implements cron jobs to schedule and automate recurring tasks, such as sending reminder emails.
- **AMQP Lib Messaging Service**: Uses AMQP Lib for efficient communication between microservices.
- **PostgreSQL Database with Sequelize**: Stores and retrieves relevant data in a PostgreSQL database, leveraging Sequelize as the ORM.
- **Sequelize CLI for Migrations**: Utilizes Sequelize CLI for managing database migrations.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web application framework for Node.js.
- **RabbitMQ**: Message broker for managing message queues.
- **Node Cron**: Scheduling library for cron jobs.
- **AMQP Lin**: Messaging service for communication between microservices.
- **Node Mailer**: Email sending library for Node.js.
- **PostgreSQL**: Relational database for data storage.
- **Sequelize**: Promise-based ORM for Node.js and PostgreSQL.
- **Sequelize CLI**: Command-line interface for Sequelize.

## How to Use

1. **Clone the repository:**
    ```bash
    git clone https://github.com/vishnu-mouli-102408/Flight-Reminder-Service
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Configure environment variables:**
    - Create a `.env` file in the project root.
    - Set the following variables in the `.env` file:
        ```env
        PORT=your_preferred_port
        EMAIL_PASSWORD= gmail_service_credentials_password
        EMAIL_ID = gmail_service_credentials_email
        EXCHANGE_NAME= preferred_airline_exchange_name
        REMINDER_BINDING_KEY = preferred_reminder_binding_key
        MESSAGE_BROKER_URL= "amqp://localhost"
        ```
4. **Run Sequelize Init**
   ```bash
   npx sequelize init
   ```
   
5. **Inside the config/config.json file make sure to add your local DB username and Password and appropriate DB name.**
   
6. **Run Sequelize Create**
   ```bash
   npx sequelize db:create
   ```
   
7. **Run Sequelize Migrations:**
    ```bash
    npx sequelize db:migrate
    ```

8. **Run the Flight Reminder Service:**
    ```bash
    npm start
    ```

9. **Access the Flight Reminder Service:**
    - The service will be running on the specified port (default is 3002).

10. **Explore the Flight Reminder Service!**

## Configuration

Ensure to set the appropriate environment variables in your `.env` file for configuring the Flight Reminder Service:

- `PORT`: Port on which the service will run.

## License

This project is licensed under the [MIT License](LICENSE).
