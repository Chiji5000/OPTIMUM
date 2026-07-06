import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './App.css'
import App from './App.jsx'
import Preloader from './preloader/preloader.jsx';
import { useState, useEffect } from 'react';

const InitialPreloader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader isLoading={loading} />
      {children}
    </>
  );
};

const Root = () => {
  return (
    <StrictMode>
      <InitialPreloader>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </InitialPreloader>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<Root />);
