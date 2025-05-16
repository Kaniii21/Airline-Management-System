import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <div className="jumbotron bg-light p-5 rounded-3 mb-4">
        <h1 className="display-4">Welcome to Airline Management System</h1>
        <p className="lead">
          Book flights, manage your reservations, check flight schedules, and more - all in one place.
        </p>
        <hr className="my-4" />
        <p>
          Start your journey today by booking a flight to your dream destination.
        </p>
        <Link to="/booking" className="btn btn-primary btn-lg">
          Book a Flight
        </Link>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Book Flights</h5>
              <p className="card-text">
                Book flights to local and international destinations with ease.
              </p>
              <Link to="/booking" className="btn btn-outline-primary">
                Book Now
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Manage Bookings</h5>
              <p className="card-text">
                View, modify, or cancel your existing flight reservations.
              </p>
              <Link to="/manage" className="btn btn-outline-primary">
                Manage
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Flight Schedule</h5>
              <p className="card-text">
                Check our comprehensive flight schedule and plan your trip.
              </p>
              <Link to="/schedule" className="btn btn-outline-primary">
                View Schedule
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 