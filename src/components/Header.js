import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Header.css';
import profilePic from '../assets/profile.jpg'; // Adjust the path as needed

const Header = () => {
  return (
    <header className="header" id="home">
      <div className="header-content">
        <img src={profilePic} alt="Profile" className="profile-image" />

        <h1 data-aos="fade-down" data-aos-duration="1000">
          Honey Priya Dharshini V
        </h1>

        <h2 data-aos="fade-up" data-aos-duration="1500">
          <Typewriter
            words={[
              'B.Tech AI & DS',
              'Cybersecurity Enthusiast',
              'Software Developer',
              'UI/UX Designer',
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
      </div>
    </header>
  );
};

export default Header;
