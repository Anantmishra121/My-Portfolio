import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import { BarLoader } from "react-spinners";
import Home from "./pages/Home";

/**
 * App Component - Main application component
 * Handles loading state and renders the Home page with Suspense
 */
const App = () => {
  // State to manage loading screen display
  const [loading, setLoading] = useState(true);

  // Effect to simulate loading time and hide loader after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex items-center justify-center">
          <BarLoader color="#f6c400ff" height={4} />
        </div>
      }
    >
      {/* Conditional rendering: show loader if loading, otherwise show Home */}
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center">
          <BarLoader color="#f6c400" height={4} />
        </div>
      ) : (
        <Home />
      )}
    </Suspense>
  );
};

export default App;
