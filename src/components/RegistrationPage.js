import React from 'react';
import RegistrationForm from './RegistrationForm';

const RegistrationPage = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl mb-4">Register for the Tournament</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;