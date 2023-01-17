import './App.css';
import { About } from './Layouts/About/About';
import { Home } from './Layouts/Home/Home';
import { InviteMe } from './Layouts/InviteMe/InviteMe';
import Navbar from "./Layouts/Navbar/Navbar.js";

function App() {
  return (
    <div className='root'>
      <Navbar/>
      <Home/>
      <About/>
      <InviteMe/>
    </div>
  );
}

export default App;
