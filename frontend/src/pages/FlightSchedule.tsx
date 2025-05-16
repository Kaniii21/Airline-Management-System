import React, { useState } from 'react';

interface Flight {
  id: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  date: string;
  flightNumber: string;
  price: number;
  seatsAvailable: {
    business: number;
    economy: number;
  };
}

// Mock data for demonstration
const mockFlights: Flight[] = [
  {
    id: '1',
    origin: 'DELHI',
    destination: 'MUMBAI',
    departureTime: '08:00 AM',
    arrivalTime: '10:30 AM',
    date: '2023-06-01',
    flightNumber: 'AI101',
    price: 10101,
    seatsAvailable: {
      business: 20,
      economy: 100
    }
  },
  {
    id: '2',
    origin: 'KOLKATA',
    destination: 'CHENNAI',
    departureTime: '10:15 AM',
    arrivalTime: '12:45 PM',
    date: '2023-06-01',
    flightNumber: 'AI202',
    price: 23927,
    seatsAvailable: {
      business: 15,
      economy: 120
    }
  },
  {
    id: '3',
    origin: 'DELHI',
    destination: 'GOA',
    departureTime: '02:30 PM',
    arrivalTime: '05:00 PM',
    date: '2023-06-01',
    flightNumber: 'AI303',
    price: 60000,
    seatsAvailable: {
      business: 10,
      economy: 150
    }
  },
  {
    id: '4',
    origin: 'LONDON',
    destination: 'DUBAI',
    departureTime: '09:45 PM',
    arrivalTime: '06:15 AM',
    date: '2023-06-02',
    flightNumber: 'AI505',
    price: 24112,
    seatsAvailable: {
      business: 25,
      economy: 200
    }
  },
  {
    id: '5',
    origin: 'BANGKOK',
    destination: 'TOKYO',
    departureTime: '11:30 AM',
    arrivalTime: '07:45 PM',
    date: '2023-06-02',
    flightNumber: 'AI707',
    price: 110079,
    seatsAvailable: {
      business: 18,
      economy: 180
    }
  }
];

const FlightSchedule: React.FC = () => {
  const [searchParams, setSearchParams] = useState({
    origin: '',
    destination: '',
    date: ''
  });
  
  const [filteredFlights, setFilteredFlights] = useState<Flight[]>(mockFlights);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams({
      ...searchParams,
      [name]: value
    });
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Filter flights based on search criteria
    const filtered = mockFlights.filter(flight => {
      // If nothing specified, include all
      if (!searchParams.origin && !searchParams.destination && !searchParams.date) {
        return true;
      }
      
      // Otherwise match the specified criteria
      return (
        (!searchParams.origin || flight.origin.includes(searchParams.origin.toUpperCase())) &&
        (!searchParams.destination || flight.destination.includes(searchParams.destination.toUpperCase())) &&
        (!searchParams.date || flight.date === searchParams.date)
      );
    });
    
    setFilteredFlights(filtered);
  };
  
  return (
    <div className="flight-schedule-page">
      <h2 className="mb-4">Flight Schedules</h2>
      
      {/* Search Form */}
      <div className="card mb-4">
        <div className="card-body">
          <form onSubmit={handleSearch}>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label htmlFor="origin" className="form-label">From</label>
                <input
                  type="text"
                  className="form-control"
                  id="origin"
                  name="origin"
                  value={searchParams.origin}
                  onChange={handleChange}
                  placeholder="Enter origin city"
                />
              </div>
              
              <div className="col-md-3 mb-3">
                <label htmlFor="destination" className="form-label">To</label>
                <input
                  type="text"
                  className="form-control"
                  id="destination"
                  name="destination"
                  value={searchParams.destination}
                  onChange={handleChange}
                  placeholder="Enter destination city"
                />
              </div>
              
              <div className="col-md-3 mb-3">
                <label htmlFor="date" className="form-label">Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  name="date"
                  value={searchParams.date}
                  onChange={handleChange}
                />
              </div>
              
              <div className="col-md-3 d-flex align-items-end mb-3">
                <button type="submit" className="btn btn-primary w-100">
                  Search Flights
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      
      {/* Flight Listing */}
      <div className="flight-list">
        {filteredFlights.length === 0 ? (
          <div className="alert alert-info">
            No flights found matching your criteria. Please try a different search.
          </div>
        ) : (
          filteredFlights.map((flight) => (
            <div key={flight.id} className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <h5 className="card-title">{flight.flightNumber}</h5>
                    <p className="text-muted mb-0">Date: {flight.date}</p>
                  </div>
                  
                  <div className="col-md-4">
                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="fw-bold mb-0">{flight.departureTime}</p>
                        <p>{flight.origin}</p>
                      </div>
                      
                      <div className="flight-duration d-flex flex-column align-items-center">
                        <div className="flight-line position-relative">
                          <i className="bi bi-airplane"></i>
                        </div>
                        <small>Direct Flight</small>
                      </div>
                      
                      <div>
                        <p className="fw-bold mb-0">{flight.arrivalTime}</p>
                        <p>{flight.destination}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-3">
                    <p className="mb-0">
                      <span className="badge bg-success me-2">B: {flight.seatsAvailable.business}</span>
                      <span className="badge bg-info">E: {flight.seatsAvailable.economy}</span>
                    </p>
                    <p className="mb-0">Price: ₹{flight.price}</p>
                  </div>
                  
                  <div className="col-md-2 d-flex align-items-center">
                    <a href="/booking" className="btn btn-outline-primary btn-sm w-100">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FlightSchedule; 