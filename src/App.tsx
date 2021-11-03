import React from 'react';
import { profilepic } from './assets';
import { Instagram, GitHub, Mail, Linkedin } from 'react-feather';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="splash-page background-highlight-down">
        <div className="about-me">
          <h1 className="card-title">
            About Me
          </h1>
          <div className="about-me-box">
            <div className="about-me-left">
              <div className="about-me-main-info">
                <p>Hello,</p>
                <p>I'm Payton, a Software Engineer</p>
                <div className="divider" />
                <p className="additional-info">iOS Swift; React Native; Musician</p>
                <p className="additional-info">App developer who loves front-end polish, with 4 years experience across app development and full stack web development.</p>
              </div>
              <div className="link-grid">
                <a href="https://github.com/paytonharris" className="link-icon">
                  <GitHub color="white" size={32} strokeWidth={1} />
                </a>
                <a href="https://www.linkedin.com/in/payton-b-harris/" className="link-icon">
                  <Linkedin color="white" size={32} strokeWidth={1} />
                </a>
                <a href="https://www.instagram.com/payton.b.harris/" className="link-icon">
                  <Instagram color="white" size={32} strokeWidth={1} />
                </a>
                <a href="mailto:payton@paytonharris.com" className="link-icon">
                  <Mail color="white" size={32} strokeWidth={1} />
                </a>
              </div>
            </div>
            <div className="about-me-right">
              <img src={profilepic} className="profile-pic" alt="payton" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
