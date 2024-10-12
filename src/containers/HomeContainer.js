import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styling
import Header from '../components/Header';
import Footer from '../components/Footer';

class HomeContainer extends React.Component {
  render() {
    return (
      <div className="home-container">
        <Header title="GoTo: Travel Booking Application" />
        <main>
          <h2 className="home-title">Welcome to the Best Travel Booking Experience</h2>
          <p className="home-description">Book your next adventure with us!</p>

          {/* Image Carousel */}
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            autoPlay={true}
            interval={3000}
            className="home-carousel custom-carousel" // Added custom class
          >
            <div>
              <img
                src="https://t4.ftcdn.net/jpg/02/80/82/81/360_F_280828158_ZZ2W8atYMHiSkLoDzxgDHNhdmXJ31jCR.jpg"
                alt="Travel Destination 1"
              />
              <p className="legend">Explore Stunning Beaches</p>
            </div>
            <div>
              <img
                src="https://t3.ftcdn.net/jpg/02/92/78/78/360_F_292787831_Q1EKAsYXgnJUMC5FhJSyJMBnt9uZFrsn.jpg"
                alt="Travel Destination 2"
              />
              <p className="legend">Discover Exotic Cities</p>
            </div>
            <div>
              <img
                src="https://t4.ftcdn.net/jpg/01/12/23/40/360_F_112234046_PwFMvyiT5z5o6LiTIs6LDYH7FHsz2jxW.jpg"
                alt="Travel Destination 3"
              />
              <p className="legend">Adventure in the Mountains</p>
            </div>
          </Carousel>

          {/* Call to Action */}
          <button className="cta-button">Book Your Adventure</button>
        </main>
        <Footer />
      </div>
    );
  }
}

export default HomeContainer;
