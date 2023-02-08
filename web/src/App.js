import logo from './logo.svg';
import './App.css';
import './utils.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Page, NotFound } from './Page/Page'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar';
import Broadcast from './Broadcast/Broadcast';
import Tape from './Tape/Tape';
import Blog from './Blog/Blog';
import BroadcastEdit from './Broadcast/BroadcastEdit';
import Profile from './Profile/Profile';
import { Login, Register } from './User/User';
import { get, post } from './utils';
export const UserIdContext = React.createContext();
function App() {
  const [userId, setUserId] = useState();

  const getUserInfo = () => {
    get("user/")
      .then((response) => setUserId(response.userId))
      .catch((error) => console.log(error));
  }

  const handleLogout = (event) => {
    event.preventDefault();
    get("user/logout/")
      .then((response) => alert(response))
      .then(() => setUserId(undefined))
      .catch((error) => console.log(error));
  };
  return (
    <Router>
      <Navbar />
      <Page>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login getUserInfo={ getUserInfo }/>} />
          <Route path="/broadcast" exact element={<Broadcast />} />
          <Route path="*" exact element={<NotFound />} />
          <Route path="/tape" exact element={<Tape />} />
          <Route path="/blog" exact element={<Blog/>}/>
        </Routes>
      </Page>
    </Router>
  );
}

export default App;
