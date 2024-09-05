import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'; // Import the Navbar
import HeroSection from './Components/HomePage/HeroSection';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import Dashboard from './Components/Dashboard/Dashboard';
import UserProfile from './Components/UserProfile/UserProfile';
import RealTimeDataView from './Components/RealTimeActivityView/RealTimeDataView';
import Notify from './Components/Notifications/Notify';
import Footer from './Components/Footer/Footer';
import About from "./Components/About/About";
import Contact from './Components/Contact/Contact';
function App() {
  return (

    <>


      <div className='min-h-screen w-full overflow-x-hidden' style={{ backgroundColor: 'rgb(31 41 55)' }}>


        <div className=" w-10/12 h-full mx-auto overflow-x-hidden rounded-b-xl bg-white mb-12 mt-6" >
          {/* Add the Navbar at the top */}
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/activity-view" element={<RealTimeDataView />} />
              <Route path="/notifications" element={<Notify />} />
              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>

           
          </BrowserRouter>
        </div>

        <Footer/>
      </div>
    </>
  );
}

export default App;
