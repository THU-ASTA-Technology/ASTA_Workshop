import logo from './logo.svg';
import './App.css';
import './utils.css';
import Profile from './Profile/Profile.js';
import Navbar from './Navbar/Navbar';
import Broadcast from './Broadcast/Broadcast';

function App() {
  return (
    <div>
      <Navbar/>
      <div className='App-container'>
        <Broadcast/>
      </div>
    </div>
  );
}

export default App;
