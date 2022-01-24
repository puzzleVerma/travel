import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Services from "./components/Services";
import Destination from "./components/Destination";
import Bookatrip from "./components/Bookatrip";
import Subscribe from "./components/Subscribe";


function App() {
  return (
    <Router>
      <Header/>

      <Routes>
        
      <Route exact 
        path="/"
        element={<Showcase/>}
      />

      <Route 
        path="/destinations"
        element={<Showcase/>}
      />

      <Route 
        path="/hotels"
        element={<Showcase/>}
      />

      <Route 
        path="/flights"
        element={<Showcase/>}
      />

      <Route 
        path="/bookings"
        element={<Showcase/>}
      />

      <Route 
        path="/login"
        element={<Showcase/>}
      />

      <Route
        path="/signup"
        element={<Showcase/>}
      />

      </Routes>

      <Services/>

      <Destination/>

      <Bookatrip/>

      <Subscribe/>

      <Footer/>

    </Router>
  );
}

export default App;
