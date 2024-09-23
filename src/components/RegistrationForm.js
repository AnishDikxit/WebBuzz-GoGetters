import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const RegistrationForm = () => {
  const [stage, setStage] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    teamName: '',
    players: []
  });

  const handleNext = () => setStage(stage + 1);
  const handlePrev = () => setStage(stage - 1);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://example.com/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit the form. Please try again.');
    }
  };

  return (
    <section id="register" className="p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <CSSTransition in={stage === 1} timeout={500} classNames="fade" unmountOnExit>
          <div>
            <label className="block mb-2">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="border p-2 w-full mb-4" />
            <button type="button" onClick={handleNext} className="bg-green-600 text-white px-4 py-2 rounded">Next</button>
          </div>
        </CSSTransition>
        <CSSTransition in={stage === 2} timeout={500} classNames="fade" unmountOnExit>
          <div>
            <label className="block mb-2">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="border p-2 w-full mb-4" />
            <button type="button" onClick={handlePrev} className="bg-gray-600 text-white px-4 py-2 rounded mr-2">Previous</button>
            <button type="button" onClick={handleNext} className="bg-green-600 text-white px-4 py-2 rounded">Next</button>
          </div>
        </CSSTransition>
        <CSSTransition in={stage === 3} timeout={500} classNames="fade" unmountOnExit>
          <div>
            <label className="block mb-2">Team Name</label>
            <input type="text" name="teamName" value={formData.teamName} onChange={handleChange} className="border p-2 w-full mb-4" />
            <button type="button" onClick={handlePrev} className="bg-gray-600 text-white px-4 py-2 rounded mr-2">Previous</button>
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
          </div>
        </CSSTransition>
      </form>
    </section>
  );
};

export default RegistrationForm;