import React, { useState, useEffect } from 'react';

// Define interfaces for our data types
interface BookingFormData {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  passport: string;
  origin: string;
  destination: string;
  travelType: 'local' | 'international';
  departureDate: string;
  seatClass: 'business' | 'economy';
  numSeats: number;
  mealType: 'vegetarian' | 'non-vegetarian';
}

const localDestinations = ['KOLKATA', 'DELHI', 'CHENNAI', 'GOA', 'MUMBAI'];
const internationalDestinations = [
  'LONDON', 'BERLIN', 'DUBAI', 'BANGKOK', 'BEIJING', 
  'PARIS', 'CANBERRA', 'TOKYO', 'WASHINGTON', 'JAPAN', 'SINGAPORE'
];

const Booking: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    passport: '',
    origin: '',
    destination: '',
    travelType: 'local',
    departureDate: '',
    seatClass: 'economy',
    numSeats: 1,
    mealType: 'vegetarian'
  });

  const [destinations, setDestinations] = useState<string[]>(localDestinations);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Update destinations when travel type changes
    setDestinations(formData.travelType === 'local' ? localDestinations : internationalDestinations);
  }, [formData.travelType]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'travelType') {
      // Reset origin and destination when travel type changes
      setFormData({
        ...formData,
        [name]: value as 'local' | 'international',
        origin: '',
        destination: ''
      });
    } else if (name === 'seatClass') {
      setFormData({
        ...formData,
        [name]: value as 'business' | 'economy'
      });
    } else if (name === 'mealType') {
      setFormData({
        ...formData,
        [name]: value as 'vegetarian' | 'non-vegetarian'
      });
    } else if (name === 'numSeats') {
      setFormData({
        ...formData,
        [name]: parseInt(value, 10)
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const validateForm = (): boolean => {
    if (formData.origin === formData.destination && formData.origin !== '') {
      setError('Origin and destination cannot be the same');
      return false;
    }

    if (formData.travelType === 'international' && formData.passport === '') {
      setError('Passport number is required for international flights');
      return false;
    }

    // Add more validations as needed
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);

    // Simulate API call for booking
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSuccess(false);
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          address: '',
          passport: '',
          origin: '',
          destination: '',
          travelType: 'local',
          departureDate: '',
          seatClass: 'economy',
          numSeats: 1,
          mealType: 'vegetarian'
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="booking-page">
      <h2 className="mb-4">Book a Flight</h2>
      
      {success ? (
        <div className="alert alert-success">
          <h4 className="alert-heading">Booking Successful!</h4>
          <p>Your flight has been booked successfully. You will receive a confirmation shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
          
          <div className="row mb-3">
            <div className="col-md-6">
              <h4>Personal Information</h4>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <textarea
                  className="form-control"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={2}
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="passport" className="form-label">
                  Passport Number {formData.travelType === 'international' && <span className="text-danger">*</span>}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="passport"
                  name="passport"
                  value={formData.passport}
                  onChange={handleChange}
                  required={formData.travelType === 'international'}
                />
                {formData.travelType === 'international' && (
                  <small className="text-muted">Required for international flights</small>
                )}
              </div>
            </div>
            
            <div className="col-md-6">
              <h4>Flight Information</h4>
              
              <div className="mb-3">
                <label htmlFor="travelType" className="form-label">Travel Type</label>
                <select
                  className="form-select"
                  id="travelType"
                  name="travelType"
                  value={formData.travelType}
                  onChange={handleChange}
                  required
                >
                  <option value="local">Local</option>
                  <option value="international">International</option>
                </select>
              </div>
              
              <div className="mb-3">
                <label htmlFor="origin" className="form-label">Origin</label>
                <select
                  className="form-select"
                  id="origin"
                  name="origin"
                  value={formData.origin}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Origin</option>
                  {destinations.map((dest) => (
                    <option key={dest} value={dest}>{dest}</option>
                  ))}
                </select>
              </div>
              
              <div className="mb-3">
                <label htmlFor="destination" className="form-label">Destination</label>
                <select
                  className="form-select"
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Destination</option>
                  {destinations.map((dest) => (
                    <option key={dest} value={dest}>{dest}</option>
                  ))}
                </select>
              </div>
              
              <div className="mb-3">
                <label htmlFor="departureDate" className="form-label">Departure Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="departureDate"
                  name="departureDate"
                  value={formData.departureDate}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="seatClass" className="form-label">Seat Class</label>
                <select
                  className="form-select"
                  id="seatClass"
                  name="seatClass"
                  value={formData.seatClass}
                  onChange={handleChange}
                  required
                >
                  <option value="economy">Economy</option>
                  <option value="business">Business</option>
                </select>
              </div>
              
              <div className="mb-3">
                <label htmlFor="numSeats" className="form-label">Number of Seats</label>
                <input
                  type="number"
                  className="form-control"
                  id="numSeats"
                  name="numSeats"
                  value={formData.numSeats}
                  onChange={handleChange}
                  min="1"
                  max="10"
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="mealType" className="form-label">Meal Preference</label>
                <select
                  className="form-select"
                  id="mealType"
                  name="mealType"
                  value={formData.mealType}
                  onChange={handleChange}
                  required
                >
                  <option value="vegetarian">Vegetarian</option>
                  <option value="non-vegetarian">Non-Vegetarian</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="d-grid gap-2">
            <button 
              type="submit" 
              className="btn btn-primary btn-lg" 
              disabled={submitting}
            >
              {submitting ? 'Processing...' : 'Book Flight'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Booking; 