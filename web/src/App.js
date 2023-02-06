import logo from './logo.svg';
import './App.css';
import './utils.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Page, NotFound } from './Page/Page'
import Home from './Home/Home'
import Profile from './Profile/Profile';
import Navbar from './Navbar/Navbar';
import Broadcast from './Broadcast/Broadcast';

function App() {
  return (
    <Router>
      <Navbar />
      <Page>
        <Profile />
      </Page>
    </Router>
  );
}

export default App;
