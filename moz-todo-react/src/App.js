import logo from './logo.svg';
import './App.css';
import './utils.css';
import Profile from './profile/Profile.js';
import Bar from './bar/Bar';
function App() {
  return (
    <div>
      <Bar/>
      <div className='app-container'>
      <Profile/>
      </div>
    </div>
  );
}

export default App;
