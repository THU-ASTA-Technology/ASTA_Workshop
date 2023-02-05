import logo from './logo.svg';
import './App.css';
import './utils.css';
import Profile from './Profile/Profile.js';
import Bar from './Bar/Bar';
function App() {
  return (
    <div>
      <Bar/>
      <div className='App-container'>
      <Profile/>
      </div>
    </div>
  );
}

export default App;
