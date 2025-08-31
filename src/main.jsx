import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS (Animate On Scroll) library for scroll animations
AOS.init({
  offset: 0,
  duration: 1000,
});

// Render the React application to the DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);