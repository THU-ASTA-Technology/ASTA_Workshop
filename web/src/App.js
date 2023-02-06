import logo from './logo.svg';
import './App.css';
import './utils.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Page, NotFound } from './Page/Page'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar';
import Broadcast from './Broadcast/Broadcast';
import Profile from './Profile/Profile';

function App() {
  return (
    <Router>
      <Navbar />
      <Page>
        <Broadcast />
      </Page>
    </Router>
  );
}

export default App;
