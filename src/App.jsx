import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Booking } from './pages/Booking';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-display">
      {/* Navbar is conditional - Booking page has its own minimal header. 
          However, for simplicity and since the Booking page in the design *has* a header (albeit minimal), 
          we might want to hide the main Navbar on /booking or just let the Booking page render on top if it was a modal.
          But here it's a page.
          
          WAIT: The Booking page design has its OWN header. 
          So we should probably NOT render the global Navbar on the /booking route.
      */}
      <Routes>
        <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
        <Route path="/services" element={<><Navbar /><Services /><Footer /></>} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
