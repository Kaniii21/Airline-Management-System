import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Airline Management System. All rights reserved.
        </p>
        <p className="mb-0 small">
          This system helps users to easily book, cancel, and view flight details.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 