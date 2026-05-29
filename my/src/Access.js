import React from 'react';
import './Access.css';
import image from './photots/image-devices.png';

function Access() {
  return (
    <section className="access-section">
      <div className="access-header">
        <h2>Access Clipboard Anywhere</h2>
        <p>
          Whether you’re on the go, or at your computer, you can access all your Clipboard 
          snippets in a few simple clicks.
        </p>
      </div>
      <div >
        <img 
          src={image}
          className="mockup-img" 
        />
      </div>
    </section>
  );
  }
export default Access;