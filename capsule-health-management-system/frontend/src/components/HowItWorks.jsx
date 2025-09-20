import React from 'react';
import { FaSearch, FaUserMd, FaCalendarCheck, FaCheckCircle } from 'react-icons/fa'; // Import icons for better visual representation

const HowItWorks = () => {
  return (
    <div className="how-it-works-container py-10 bg-gray-50 mt-8 mb-8">
      <h2 className="text-center text-3xl font-medium mb-8">How It Works</h2>
      <div className="steps flex flex-col md:flex-row justify-between items-start gap-10 md:gap-5 px-5 md:px-20">
        {/* Step 1 */}
        <div className="step text-center">
          <div className="icon mb-3">
            <FaSearch className="text-primary text-4xl mx-auto" />
          </div>
          <h3 className="font-semibold text-lg">1. Search a Doctor</h3>
          <p className="text-gray-600">Find doctors by specialty, name, or location.</p>
        </div>

        {/* Step 2 */}
        <div className="step text-center">
          <div className="icon mb-3">
            <FaUserMd className="text-primary text-4xl mx-auto" />
          </div>
          <h3 className="font-semibold text-lg">2. Check Doctor Profile</h3>
          <p className="text-gray-600">View details, qualifications, and reviews.</p>
        </div>

        {/* Step 3 */}
        <div className="step text-center">
          <div className="icon mb-3">
            <FaCalendarCheck className="text-primary text-4xl mx-auto" />
          </div>
          <h3 className="font-semibold text-lg">3. Book Appointment</h3>
          <p className="text-gray-600">Select a date and time that suits you.</p>
        </div>

        {/* Step 4 */}
        <div className="step text-center">
          <div className="icon mb-3">
            <FaCheckCircle className="text-primary text-4xl mx-auto" />
          </div>
          <h3 className="font-semibold text-lg">4. Confirm & Visit</h3>
          <p className="text-gray-600">Get confirmation and attend your appointment.</p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
