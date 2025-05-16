import React, { useState } from 'react';

interface ComplainForm {
  firstName: string;
  lastName: string;
  phone: string;
  complaintType: string;
  complaintText: string;
}

const Complain: React.FC = () => {
  const [formData, setFormData] = useState<ComplainForm>({
    firstName: '',
    lastName: '',
    phone: '',
    complaintType: '',
    complaintText: ''
  });

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.complaintType || !formData.complaintText) {
      setError('Please fill in all required fields');
      return;
    }

    setSubmitting(true);

    // Simulate API call for submitting complaint
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
          complaintType: '',
          complaintText: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="complain-page">
      <h2 className="mb-4">Submit a Complaint or Feedback</h2>
      
      {success ? (
        <div className="alert alert-success">
          <h4 className="alert-heading">Thank You!</h4>
          <p>Your complaint/feedback has been submitted successfully. Our team will review it shortly.</p>
        </div>
      ) : (
        <div className="card">
          <div className="card-body">
            {error && <div className="alert alert-danger">{error}</div>}
            
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
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
                </div>
                
                <div className="col-md-6">
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
                </div>
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
                <label htmlFor="complaintType" className="form-label">Complaint Type</label>
                <select
                  className="form-select"
                  id="complaintType"
                  name="complaintType"
                  value={formData.complaintType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Complaint Type</option>
                  <option value="Baggage Delivery">Baggage Delivery</option>
                  <option value="Flight Delay">Flight Delay</option>
                  <option value="Customer Service">Customer Service</option>
                  <option value="Refund">Refund</option>
                  <option value="In-flight Experience">In-flight Experience</option>
                  <option value="Website Issue">Website Issue</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="mb-3">
                <label htmlFor="complaintText" className="form-label">Complaint Details</label>
                <textarea
                  className="form-control"
                  id="complaintText"
                  name="complaintText"
                  rows={5}
                  value={formData.complaintText}
                  onChange={handleChange}
                  required
                  placeholder="Please provide details about your complaint or feedback"
                ></textarea>
              </div>
              
              <div className="d-grid gap-2">
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  disabled={submitting}
                >
                  {submitting ? 'Submitting...' : 'Submit Complaint'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      <div className="mt-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Contact Support</h5>
            <p className="card-text">
              If you need immediate assistance, please contact our support team:
            </p>
            <ul className="list-unstyled">
              <li><strong>Customer Service:</strong> +1-800-123-4567</li>
              <li><strong>Email:</strong> support@airlinemanagementsystem.com</li>
              <li><strong>Hours:</strong> 24/7 Support Available</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complain; 