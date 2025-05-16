import React, { useState } from 'react';

interface BookingDetails {
  id: string;
  name: string;
  phone: string;
  address: string;
  passport: string;
  origin: string;
  destination: string;
  departureDate: string;
  departureTime: string;
  flightNumber: string;
  class: string;
  numSeats: number;
  mealType: string;
  totalPrice: number;
}

const Manage: React.FC = () => {
  const [searchParams, setSearchParams] = useState({
    bookingId: '',
    lastName: '',
    phone: ''
  });
  
  const [showSearchForm, setShowSearchForm] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [booking, setBooking] = useState<BookingDetails | null>(null);
  const [cancelConfirm, setCancelConfirm] = useState(false);
  const [cancelSuccess, setCancelSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchParams({
      ...searchParams,
      [name]: value
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    // Basic validation
    if (!searchParams.bookingId && !searchParams.lastName && !searchParams.phone) {
      setError('Please enter at least one search criteria');
      return;
    }
    
    setLoading(true);
    
    // Simulate API call to fetch booking details
    setTimeout(() => {
      setLoading(false);
      
      // For demo purposes, always "find" a booking
      setBooking({
        id: searchParams.bookingId || 'HF600',
        name: 'KANAK BHASKAR',
        phone: searchParams.phone || '787979900',
        address: 'JAMSHEDPUR, JH',
        passport: '',
        origin: 'DELHI',
        destination: 'MUMBAI',
        departureDate: '30/08/2024',
        departureTime: '4:00 PM',
        flightNumber: 'AI101',
        class: 'Business',
        numSeats: 2,
        mealType: 'Vegetarian',
        totalPrice: 25202
      });
      
      setShowSearchForm(false);
    }, 1500);
  };

  const handleCancelBooking = () => {
    setCancelConfirm(true);
  };

  const confirmCancellation = () => {
    setLoading(true);
    
    // Simulate API call for cancellation
    setTimeout(() => {
      setLoading(false);
      setCancelConfirm(false);
      setCancelSuccess(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setCancelSuccess(false);
        setBooking(null);
        setShowSearchForm(true);
        setSearchParams({
          bookingId: '',
          lastName: '',
          phone: ''
        });
      }, 3000);
    }, 1500);
  };

  const backToSearch = () => {
    setBooking(null);
    setShowSearchForm(true);
  };
  
  return (
    <div className="manage-page">
      <h2 className="mb-4">Manage Your Booking</h2>
      
      {cancelSuccess ? (
        <div className="alert alert-success">
          <h4 className="alert-heading">Booking Cancelled!</h4>
          <p>Your booking has been cancelled successfully. A refund will be processed according to our cancellation policy.</p>
        </div>
      ) : showSearchForm ? (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title mb-4">Find Your Booking</h5>
            
            {error && <div className="alert alert-danger">{error}</div>}
            
            <form onSubmit={handleSearch}>
              <div className="mb-3">
                <label htmlFor="bookingId" className="form-label">Booking Reference ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="bookingId"
                  name="bookingId"
                  value={searchParams.bookingId}
                  onChange={handleChange}
                  placeholder="e.g. HF600"
                />
              </div>
              
              <p className="text-center">OR</p>
              
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={searchParams.lastName}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="col-md-6 mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={searchParams.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="d-grid gap-2">
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  disabled={loading}
                >
                  {loading ? 'Searching...' : 'Find Booking'}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : booking ? (
        <div className="booking-details">
          {cancelConfirm ? (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-danger">Confirm Cancellation</h5>
                <p>Are you sure you want to cancel your booking? This action cannot be undone.</p>
                <p><strong>Cancellation Policy:</strong> You will receive a refund of 80% of the total fare.</p>
                
                <div className="d-flex gap-2 justify-content-end">
                  <button 
                    className="btn btn-secondary" 
                    onClick={() => setCancelConfirm(false)} 
                    disabled={loading}
                  >
                    No, Keep My Booking
                  </button>
                  <button 
                    className="btn btn-danger" 
                    onClick={confirmCancellation} 
                    disabled={loading}
                  >
                    {loading ? 'Processing...' : 'Yes, Cancel Booking'}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="card mb-4">
                <div className="card-header bg-primary text-white">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Booking Details</h5>
                    <span className="badge bg-light text-dark">Booking ID: {booking.id}</span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="text-muted">Passenger Information</h6>
                      <p><strong>Name:</strong> {booking.name}</p>
                      <p><strong>Phone:</strong> {booking.phone}</p>
                      <p><strong>Address:</strong> {booking.address}</p>
                      {booking.passport && <p><strong>Passport:</strong> {booking.passport}</p>}
                    </div>
                    
                    <div className="col-md-6">
                      <h6 className="text-muted">Flight Information</h6>
                      <p><strong>Flight:</strong> {booking.flightNumber}</p>
                      <p><strong>Route:</strong> {booking.origin} to {booking.destination}</p>
                      <p><strong>Date & Time:</strong> {booking.departureDate}, {booking.departureTime}</p>
                      <p><strong>Class:</strong> {booking.class}</p>
                    </div>
                  </div>
                  
                  <hr />
                  
                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="text-muted">Additional Information</h6>
                      <p><strong>Number of Seats:</strong> {booking.numSeats}</p>
                      <p><strong>Meal Preference:</strong> {booking.mealType}</p>
                    </div>
                    
                    <div className="col-md-6">
                      <h6 className="text-muted">Payment Information</h6>
                      <p><strong>Total Fare:</strong> ₹{booking.totalPrice}</p>
                      <p><strong>Status:</strong> <span className="badge bg-success">Confirmed</span></p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="d-flex gap-2 justify-content-end">
                <button className="btn btn-secondary" onClick={backToSearch}>
                  Back to Search
                </button>
                <button className="btn btn-danger" onClick={handleCancelBooking}>
                  Cancel Booking
                </button>
              </div>
            </>
          )}
        </div>
      ) : null}
      
      <div className="mt-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Need Help?</h5>
            <p className="card-text">
              If you're having trouble finding your booking or need assistance, contact our customer service:
            </p>
            <ul className="list-unstyled">
              <li><strong>Customer Service:</strong> +1-800-123-4567</li>
              <li><strong>Email:</strong> bookings@airlinemanagementsystem.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage; 