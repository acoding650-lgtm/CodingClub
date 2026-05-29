import React from 'react';
import './Supercharge.css';
import i1 from './photots/blacklist.png';
import i2 from './photots/ai.png';
import i3 from './photots/preview.png';
import i4 from './photots/google.png';
import i5 from './photots/ibm.png';
import i6 from './photots/microsoft.png';
import i7 from './photots/enterprise.png';
import i8 from './photots/vector graphics.png';

function Supercharge() {
    return (
        <section className="workflow-section">
            <div className="workflow-header">
                <h2>Supercharge your workflow</h2>
                <p>We've got the tools to boost your productivity.</p>
            </div>

            <div className="features-grid">

                <div className="grid-item">

                    <div className="icon-wrapper">
                        <img src={i1} className="feature-icon"/>
                    </div>

                    <h3>Create blacklists</h3>
                    <p>
                        Ensure sensitive information never makes its way to your clipboard
                        by excluding certain sources.
                    </p>
                </div>

                <div className="grid-item">

                    <div className="icon-wrapper">
                        <img src={i2} className="feature-icon"/>
                    </div>

                    <h3>Plain text snippets</h3>
                    <p>
                        Remove unwanted formatting from copied text for a consistent look.
                    </p>
                </div>

                <div className="grid-item">

                    <div className="icon-wrapper">
                        <img src={i3} className="feature-icon"/>
                    </div>

                    <h3>Sneak preview</h3>
                    <p>
                        Quick preview of all snippets on your Clipboard for easy access.
                    </p>
                </div>

            </div>

            <div className="brands-bar">

            <img 
          src=  {i4}  
          className="brand-img"
        />
        <img 
          src={i5} 
          className="brand-img"
        />
        <img 
          src={i6} 
           
          className="brand-img"
        />
        <img 
          src={i7} 
          
          className="brand-img"
        />
        <img 
          src={i8}  
          className="brand-img"
        />

                </div>
        </section>
    );
}

export default Supercharge;