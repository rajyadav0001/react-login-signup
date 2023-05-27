import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{height:"100vh",width:"100vw",backgroundRepeat: "no-repeat", backgroundSize:"cover", backgroundImage: `url("https://images.unsplash.com/photo-1619252584172-a83a949b6efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdoaXRlJTIwdGhlbWV8ZW58MHx8MHx8fDA%3D&w=1000&q=80")`}}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>
);

 