import logo from './logo.svg';
import './App.css';
import './utils.css';
import { Page, NotFound } from './Page/Page'
import Profile from './Profile/Profile.js';
import Navbar from './Navbar/Navbar';
import Broadcast from './Broadcast/Broadcast';

function App() {
  return (
    <div>
      <Navbar/>
      <Page>
        <Broadcast/>
      </Page>
    </div>
  );
}

export default App;
