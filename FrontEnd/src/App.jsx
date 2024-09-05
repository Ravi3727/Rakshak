import './App.css'
import { Routes,Route } from 'react-router-dom'
import HeroSection from './Components/HomePage/HeroSection'
import {Login} from './Components/Auth/Login'
import { Signup } from './Components/Auth/Signup'
import Dashboard from './Components/Dashboard/Dashboard'
import { UserProfile } from './Components/UserProfile/UserProfile'
import RealTimeDataView from './Components/RealTimeActivityView/RealTimeDataView'
import  Notify  from './Components/Notifications/Notify'
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/profile" element={<UserProfile/>} />
        <Route path='/activity-view' element={<RealTimeDataView/>} />
        <Route path='/notifications' element={<Notify/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App