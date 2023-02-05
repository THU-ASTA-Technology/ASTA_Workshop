import logo from './logo.svg';
import './App.css';
import './utils.css';
import Profile from './Profile/Profile.js';
import Navbar from './Navbar/Navbar';
function App() {
  return (
    <div>
      <Navbar/>
      <div className='App-container'>
      <Profile/>
      </div>
    </div>
  );
}

export default App;
