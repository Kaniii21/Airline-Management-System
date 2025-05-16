import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <h2 className="mb-4">About Airline Management System</h2>
      
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Our Mission</h5>
          <p className="card-text">
            The Airline Management System is designed to provide a seamless and efficient experience for travelers.
            We aim to simplify the process of booking, managing, and tracking flights, making travel more accessible
            and convenient for everyone.
          </p>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Features</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Easy flight booking</li>
                <li className="list-group-item">Comprehensive flight schedules</li>
                <li className="list-group-item">Booking management</li>
                <li className="list-group-item">Complaints and feedback processing</li>
                <li className="list-group-item">User-friendly interface</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Our Services</h5>
              <p className="card-text">
                We offer a wide range of services to meet your travel needs:
              </p>
              <ul>
                <li>Local flights across major cities</li>
                <li>International flights to popular destinations</li>
                <li>Business and Economy class options</li>
                <li>Special meal preferences</li>
                <li>24/7 customer support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Contact Us</h5>
          <p className="card-text">
            If you have any questions or concerns, please don't hesitate to reach out to us:
          </p>
          <ul className="list-unstyled">
            <li><strong>Phone:</strong> +1-123-456-7890</li>
            <li><strong>Email:</strong> support@airlinemanagementsystem.com</li>
            <li><strong>Address:</strong> 123 Aviation Street, Skyline Tower, NY 10001</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About; 