# Airline Management System

This project is a comprehensive Airline Management System with a C/C++ backend and a React TypeScript frontend. The system allows users to easily book, cancel, and view flight details, making it convenient to access flight schedules and fares through a user-friendly interface.

## Overview

The Airline Management System consists of two main components:
- **C++ Backend**: Core business logic for flight management, booking, and data processing
- **React Frontend**: Modern responsive web interface for user interactions

## Features

- **Flight Booking**: Book flights to local and international destinations
- **Seat Selection**: Choose between business and economy class seating
- **Flight Schedules**: View available flights, times, and prices
- **Booking Management**: View, modify or cancel existing reservations
- **Complaints System**: Submit feedback or complaints
- **User-friendly Interface**: Intuitive UI for seamless navigation

## Backend (C/C++)

The backend is built with C++ and provides the core functionality of the system:

### Core Components

- **Passenger Management**: Handle passenger information and authentication
- **Booking System**: Process flight bookings and seat allocations
- **Flight Database**: Store and retrieve flight information
- **Payment Processing**: Calculate fares based on routes and classes
- **Complaint Handling**: Process and store user feedback

### Data Files

- **flight.txt**: Stores flight details and availability
- **complain.txt**: Stores user complaints and feedback
- **payment.h**: Contains pricing logic for different routes

## Frontend (React TypeScript)

The frontend is built with React, TypeScript, and Bootstrap, providing a modern and responsive user interface:

### Components

- **Booking Interface**: Form-based interface for flight booking
- **Flight Schedule**: Interactive listing of available flights
- **Manage Bookings**: Interface to find and manage existing bookings
- **Complaint Form**: Easy submission of user feedback
- **About Page**: Information about the system

### Technology Stack

- **React**: Frontend library for building the user interface
- **TypeScript**: Type-safe JavaScript for better development
- **React Router**: Navigation between different sections
- **Bootstrap**: Responsive design framework
- **Axios**: API communication (for future backend integration)

## Setup and Installation

### Backend

1. Compile the main.cpp file with a C++ compiler:
   ```
   g++ main.cpp -o airline_management
   ```
2. Run the compiled program:
   ```
   ./airline_management
   ```

### Frontend

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. The application will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
airline-management-system/
├── backend/
│   ├── main.cpp             # Main backend application
│   ├── payment.h            # Payment calculation module
│   ├── flight.txt           # Flight data
│   └── complain.txt         # Complaint data
│
├── frontend/
│   ├── public/              # Public assets
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── Booking.tsx
│   │   │   ├── FlightSchedule.tsx
│   │   │   ├── Manage.tsx
│   │   │   ├── Complain.tsx
│   │   │   └── About.tsx
│   │   ├── App.tsx          # Main application component
│   │   └── index.tsx        # Application entry point
│   └── package.json         # Frontend dependencies
│
└── README.md                # Project documentation
```

## Future Enhancements

- **API Integration**: Connect the React frontend to the C++ backend via a REST API
- **User Authentication**: Add login and registration system
- **Admin Panel**: Create an administrative interface for managing flights
- **Payment Gateway**: Integrate with payment processors
- **Email Notifications**: Add booking confirmations and updates

## Contributors

- [Your Name] - Initial development and documentation

## License

This project is licensed under the MIT License - see the LICENSE file for details.
