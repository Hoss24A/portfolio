import React, { useState } from 'react';
import './study1.css';

function App() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const services = [
    { id: 1, name: 'Classic Haircut', price: 35, duration: '30 min', description: 'Precision haircut with neckline detailing' },
    { id: 2, name: 'Traditional Shave', price: 40, duration: '45 min', description: 'Hot towel treatment with straight razor finish' },
    { id: 3, name: 'Beard Trim', price: 25, duration: '20 min', description: 'Shape and define your beard' },
    { id: 4, name: 'Haircut & Beard', price: 55, duration: '50 min', description: 'Complete grooming package' }
  ];

  const barbers = [
    { id: 1, name: 'John Smith', specialty: 'Classic Cuts', instagram: '@johnclassiccuts', image: 'barber1.jpg' },
    { id: 2, name: 'Mike Johnson', specialty: 'Beard Styling', instagram: '@mikebeardmaster', image: 'barber2.jpg' },
    { id: 3, name: 'David Williams', specialty: 'Modern Styles', instagram: '@davidfadeking', image: 'barber3.jpg' }
  ];

  const availableTimes = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setStep(2);
  };

  const handleBarberSelect = (barber) => {
    setSelectedBarber(barber);
    setStep(3);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const confirmBooking = () => {
    setBookingConfirmed(true);
    setStep(4);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Classic Cuts Barbershop</h1>
        <div className="progress-bar">
          <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>1. Service</div>
          <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>2. Barber</div>
          <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>3. Time</div>
          <div className={`progress-step ${step >= 4 ? 'active' : ''}`}>4. Confirm</div>
        </div>
      </header>

      <main className="app-main">
        {step === 1 && (
          <div className="service-selection">
            <h2>Select Your Service</h2>
            <div className="services-grid">
              {services.map(service => (
                <div 
                  key={service.id} 
                  className={`service-card ${selectedService?.id === service.id ? 'selected' : ''}`}
                  onClick={() => handleServiceSelect(service)}
                >
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <div className="service-meta">
                    <span className="price">${service.price}</span>
                    <span className="duration">{service.duration}</span>
                  </div>
                </div>
              ))}
            </div>
            <button 
              className="next-btn" 
              disabled={!selectedService}
              onClick={() => setStep(2)}
            >
              Next: Choose Barber
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="barber-selection">
            <h2>Select Your Barber</h2>
            <div className="barbers-grid">
              {barbers.map(barber => (
                <div 
                  key={barber.id} 
                  className={`barber-card ${selectedBarber?.id === barber.id ? 'selected' : ''}`}
                  onClick={() => handleBarberSelect(barber)}
                >
                  <div className="barber-image"></div>
                  <h3>{barber.name}</h3>
                  <p className="specialty">{barber.specialty}</p>
                  <p className="instagram">{barber.instagram}</p>
                </div>
              ))}
              <div 
                className={`barber-card ${selectedBarber === 'any' ? 'selected' : ''}`}
                onClick={() => handleBarberSelect('any')}
              >
                <div className="barber-image any-barber"></div>
                <h3>Any Available Barber</h3>
                <p className="specialty">First available appointment</p>
              </div>
            </div>
            <div className="navigation-buttons">
              <button className="back-btn" onClick={() => setStep(1)}>Back</button>
              <button 
                className="next-btn" 
                disabled={!selectedBarber}
                onClick={() => setStep(3)}
              >
                Next: Choose Time
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="time-selection">
            <h2>Select Date & Time</h2>
            <div className="date-picker">
              <h3>Select Date</h3>
              <div className="calendar">
                {[1, 2, 3, 4, 5, 6, 7].map(day => (
                  <div 
                    key={day} 
                    className={`calendar-day ${selectedDate === day ? 'selected' : ''}`}
                    onClick={() => handleDateSelect(day)}
                  >
                    <span className="day-name">Mon</span>
                    <span className="day-number">{day}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="time-picker">
              <h3>Available Times</h3>
              <div className="time-slots">
                {availableTimes.map(time => (
                  <div 
                    key={time} 
                    className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>
            <div className="navigation-buttons">
              <button className="back-btn" onClick={() => setStep(2)}>Back</button>
              <button 
                className="next-btn" 
                disabled={!selectedDate || !selectedTime}
                onClick={confirmBooking}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        )}

        {step === 4 && bookingConfirmed && (
          <div className="confirmation">
            <div className="confirmation-card">
              <div className="confirmation-icon">✓</div>
              <h2>Booking Confirmed!</h2>
              <div className="confirmation-details">
                <p><strong>Service:</strong> {selectedService.name}</p>
                <p><strong>Barber:</strong> {selectedBarber === 'any' ? 'Any Available Barber' : selectedBarber.name}</p>
                <p><strong>Date:</strong> Monday, May {selectedDate}</p>
                <p><strong>Time:</strong> {selectedTime}</p>
              </div>
              <div className="confirmation-actions">
                <button className="share-btn">Share on Social Media</button>
                <button className="add-calendar-btn">Add to Calendar</button>
              </div>
              <p className="confirmation-note">
                You'll receive a confirmation email with all the details. 
                Text reminders are available 24 hours before your appointment.
              </p>
              <button className="done-btn" onClick={() => {
                setStep(1);
                setSelectedService(null);
                setSelectedBarber(null);
                setSelectedDate(null);
                setSelectedTime(null);
                setBookingConfirmed(false);
              }}>
                Book Another Appointment
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;