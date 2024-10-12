import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';
import TravelerCounter from '../components/TravelerCounter'; // Add this line

function BookingContainer() {
  const [bookings, setBookings] = useState([]);

  const addBooking = (newBooking) => {
    setBookings([...bookings, newBooking]);
  };

  return (
    <div className="booking-container">
      <h2>Your Bookings</h2>
      <TravelerCounter /> {/* Counter for number of travelers */}
      <BookingForm addBooking={addBooking} />
      <BookingList bookings={bookings} />
    </div>
  );
}

export default BookingContainer;
