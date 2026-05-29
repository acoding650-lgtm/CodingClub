import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import ClipboardLanding from './ClipboardLanding';
import Snippet from './Snippet';
import Access from './Access';
import Supercharge from './Supercharge';
import Bottom from './Bottom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClipboardLanding/>
    <Snippet />
    <Access />
    <Supercharge />
    <Bottom />
  </React.StrictMode>
);
reportWebVitals();
