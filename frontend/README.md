# Airline Management System Frontend

This is the frontend application for the Airline Management System. It is built using React, TypeScript, React Router, and Bootstrap.

## Features

- **Flight Booking:** Book local and international flights
- **Flight Schedules:** View available flight schedules and details
- **Booking Management:** Find and manage your bookings
- **Complaints & Feedback:** Submit complaints or feedback
- **About:** Information about the airline management system

## Installation and Setup

1. Make sure you have Node.js installed on your machine
2. Clone this repository
3. Navigate to the frontend directory
4. Install the dependencies:

```bash
npm install
```

5. Start the development server:

```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Navbar.tsx    # Navigation bar
│   └── Footer.tsx    # Footer component
├── pages/            # Page components
│   ├── Home.tsx
│   ├── Booking.tsx
│   ├── FlightSchedule.tsx
│   ├── Manage.tsx
│   ├── Complain.tsx
│   └── About.tsx
└── assets/           # Static assets
```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects the app from create-react-app

## Technologies Used

- React
- TypeScript
- React Router
- Bootstrap
- Axios

## Integration with Backend

The frontend is designed to work with the C++ backend. Currently, it uses mock data for demonstration purposes, but in a production environment, it would connect to the backend API to fetch and manipulate data.
