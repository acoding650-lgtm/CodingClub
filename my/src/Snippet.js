import React from "react";
import './Snippet.css';
import computerImg from './photots/image-computer.png';

function Snippet() {
    return (
        <section className="features-section">
            <div className="features-header">
                <h2>Keep track of your snippets</h2>
                <p>
                    Clipboard instantly stores any item you copy in the cloud, meaning you can access
                    your snippets immediately on all your devices. Our Mac and iOS apps will help you
                    organize everything.
                </p>
            </div>
            <div className="features-content">

                <div className="image-column">

                    <img
                        src={computerImg}
                        className="mockup-img"
                    />
                </div>
                <div className="text-column">
                    <div className="feature-item">
                        <h3>Quick Search</h3>
                        <p>Easily search your snippets by content, category, web address, application, and more.</p>
                    </div>

                    <div className="feature-item">
                        <h3>iCloud Sync</h3>
                        <p>Instantly saves and syncs snippets across all your devices.</p>
                    </div>

                    <div className="feature-item">
                        <h3>Complete History</h3>
                        <p>Retrieve any snippets from the first moment you started using the app.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Snippet;//CSS PROPRTY FLEX  is used to create side by side.div is like a 
//container