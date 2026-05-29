import React from 'react';
import './ClipboardLanding.css';
import image from './photots/background.png';
import logo from './photots/logo.png';

function ClipboardLanding() {
  return (
    <div className="page-wrapper">
      <div className="container">

        <div className="logo-circle">
          <img src ={logo} className="logo"/>
          <img src={image} className="header-img" />
        </div>

        <h1>A history of everything you copy</h1>
        <p>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>


        <div className="button-group">
          <a href="#" className="btn btn-ios">Download for iOS</a>
          <a href="#" className="btn btn-mac">Download for Mac</a>
        </div>
      </div>
    </div>
  );
}

export default ClipboardLanding;