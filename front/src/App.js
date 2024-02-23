import React from "react";
import {  Route, Routes } from "react-router-dom";
import Navbar from './Navbar/Navbar.jsx';
import Home from './pages/Home.jsx';
import Service from './pages/Service.jsx';
import BookNow from './pages/BookNow.jsx';
import Faq from './pages/Faq.jsx';
import Contact from './pages/Contact.jsx';
import SuccessPage from './pages/SuccessPage.jsx';
import NotFound from './pages/NotFound.jsx';
import Footer from './Footer/Footer.jsx'
import './App.css';

// import Order from './pages/order.jsx'
function App() {

  return (
    <div className="App">        
      <div >
        <Navbar />
      </div>
      <div >
        <Routes className='routes'> 
            <Route exact path="/" element={<Home />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/BookNow" element={<BookNow />} />
            <Route path="/Faq" element={<Faq />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/SuccessPage" element={< SuccessPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
