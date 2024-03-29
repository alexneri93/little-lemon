import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/utils/variables.css';
import './css/utils/position.css';
import './css/utils/spacing.css';
import './css/utils/colors.css';
import './css/utils/text.css';
import './css/utils/visibility.css';
import './css/components/button.css';
import './css/components/cards.css';
import './css/components/form.css';
import './css/components/image.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
