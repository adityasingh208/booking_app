
# Reserve-Booking

A robust full-stack booking application developed using React, Node.js, and MongoDB. This application enables users to search for hotels, view detailed information, and make room reservations based on destination, date range, and preferences.

## Table of content
- Demo
- Features
- Tech Stack
- Installation
- Environment Variables
- Contributing

## Demo

https://reserve-easy.vercel.app/


## Features

- Responsive design for cross-device compatibility.
- Fetches hotel data from MongoDB via a backend API.
- User-friendly hotel search based on destination, date range, and preferences.
- Detailed hotel information with dynamic pricing and secure user authentication.
- Prevents double-bookings by managing room availability.
- Efficient state management using React Context API.


## Tech Stack

- React
- MongoDB
- Node.js
- JWT (JSON Web Tokens)
- React Context API



## Installation

Install my-project with npm

```bash
  git clone https://github.com/anandkumar08120/Reserve-Booking.git
  cd client 
  npm install
  cd..
  cd api
  npm install
```
Set up your MongoDB database and configure the connection in the server.

Run the application with following commands:

```bash
  node index.js
  cd..
  cd client
  npm start
```
  
  

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URL`

`SECRET_KEY_JWT`


## Contributing

Contributions to the Fitness Exercises App are welcome! If you'd like to contribute, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them with descriptive messages.
- Push your changes to your fork.
- Open a pull request, describing the changes you've made.

Please ensure your code follows the project's coding standards and includes relevant documentation.
