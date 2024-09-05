import './App.css'
// import HeroSection from './Components/HomePage/HeroSection';
import Dashboard from './Components/Dashboard/Dashboard';
// import Notify from './Components/Notifications/Notify';
import UserProfile from './Components/UserProfile/UserProfile';
function App() {
  return (
    <>
    {/* style={{ backgroundColor: 'rgb(31 41 55)' }} */}
      <div className='h-full w-full' >
        {/* <Dashboard /> */}
        <UserProfile/>
        {/* <Notify/> */}
        {/* <HeroSection/> */}
      </div>
    </>
  )
}
export default App