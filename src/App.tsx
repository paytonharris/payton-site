import React from 'react';
import profilepic from './assets/profilepic.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Splash-page">
        <div className="About-me">
          <h1 className="Card-title">
            Payton Harris
          </h1>
          <div className="About-me-left">
            <p>Hello,</p>
            <p>I'm Payton, a Software Engineer</p>
            <div className="Divider" />
            <p className="Additional-info">iOS Developer; React Native; Musician</p>
            <p className="Additional-info">Creator of Unheard Noise, and more projects below.</p>
          </div>
          <div className="About-me-right">
            <img src={profilepic} className="Profile-pic" alt="payton" />
          </div>
        </div>
      </div>
      <div className="Splash-page">
        <div className="About-me">
          <h1>
            More details
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
