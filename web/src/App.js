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
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/broadcast" exact element={<Broadcast />} />
          <Route path="*" exact element={<NotFound />} />
        </Routes>
      </Page>
    </Router>
  );
}

export default App;
