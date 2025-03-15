import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Sepet from './pages/Sepet';
import Contact from './pages/Contact';
import Footer from "./components/footer/footer"; 
import PaymentPage from './pages/PaymentPage'; 
import ApprovalPage from './pages/Approval'; 
import İnformationPage from "./pages/İnformaton"




function App() {
  return (
    <Router>
      <div className="App">
      
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sepet" element={<Sepet />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<PaymentPage />} /> 
          <Route path="/approval" element={<ApprovalPage />} />
          <Route path="/information/:id" element={<İnformationPage />} />
 
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
