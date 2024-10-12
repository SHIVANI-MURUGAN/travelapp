import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookerName: '',
      destination: '',
      date: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newBooking = {
      ...this.state,
      travelers: this.props.travelers, // Use the travelers count from Redux store
    };
    this.props.addBooking(newBooking);
    this.setState({ bookerName: '', destination: '', date: '' });
  };

  render() {
    return (
      <form className="booking-form" onSubmit={this.handleSubmit}>
        <label>
          Booker Name:
          <input
            type="text"
            name="bookerName"
            value={this.state.bookerName}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Destination:
          <input
            type="text"
            name="destination"
            value={this.state.destination}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={this.state.date}
            onChange={this.handleChange}
            required
          />
        </label>
        <div>
          <label>
            Travelers: {this.props.travelers} {/* Display travelers from Redux */}
          </label>
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
  }
}

// Map the Redux state to the component's props
const mapStateToProps = (state) => ({
  travelers: state.counter, // Get the number of travelers from Redux
});

export default connect(mapStateToProps)(BookingForm);
