import './App.css';
import { MoviePage } from './components/MoviePage/MoviePage';

import { Book } from '../src/components/BookPage/Book';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

import { Terms } from './components/Seat/Terms';
import { Selectseat } from './components/Seat/Selectseat';
import { Slotbooking } from './components/Slotbooking.jsx/Slotbooking';
import { Seating } from './components/SeatBook/Seating';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import Summary from './components/Summary/Summary'
import Navbar from './components/navbar/Navbar';
import Menubar from './components/menubar/Menubar';
import Footer from './components/footer/Footer';
import Login from './components/Login/Login';




function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyALuLSKz7yNKbdk3t3kAHfs1ODnmygpdjQ",
    authDomain: "bookmyshow-5a00b.firebaseapp.com",
    projectId: "bookmyshow-5a00b",
    storageBucket: "bookmyshow-5a00b.appspot.com",
    messagingSenderId: "696353441992",
    appId: "1:696353441992:web:3d682155c2f61541c77dfd",
    measurementId: "G-MLVGY89LDF"
  };


  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moviepage" element={<MoviePage />} />
        <Route path="/movie/:id" element={<Book />} />
        <Route path="/book" element={<Book />} />
        <Route path="/terms" element={<><Terms /> <Selectseat /></>} />
        <Route path="/slot/:id/:bookingId" element={<Slotbooking />} />
        <Route path="/seating/:id" element={<Seating />} />
        <Route path="/summary/:id" element={<Summary />} />

      </Routes>

    </div>
  );
}

export default App;
