import './App.css';
import './utils.css';
import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './NavBar/NavBar';
import { Page, NotFound } from './Page/Page';
import Home from './Home/Home';
import Broadcast from './Broadcast/Broadcast';
import BroadcastEdit from './Broadcast/BroadcastEdit';
import Tape from './Tape/Tape';
import TapeEdit from './Tape/TapeEdit';
import Blog from './Blog/Blog';
import BlogDetail from './Blog/BlogDetail';
import BlogEdit from './Blog/BlogEdit';
import { Login, Register } from './User/User';
import { get, post } from './utils';

// export userId like a global variable
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
      .catch((error) => alert(error));
  };

  useEffect(getUserInfo, []);

  return (
    <Router>
      <UserIdContext.Provider value={userId}>
        <NavBar userId={userId} handleLogout={handleLogout}/>
        <Page>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/login" exact element={<Login getUserInfo={ getUserInfo }/>} />
            <Route path="/broadcast" exact element={<Broadcast />} />
            <Route path="/tape" exact element={<Tape />} />
            <Route path="/blog" exact element={<Blog />} />
            <Route path="/blog/:blogId" exact element={<BlogDetail />} />
            <Route path="/blog/edit" exact element={<BlogEdit />} /> 
            <Route path="/blog/edit/:blogId" exact element={<BlogEdit />} /> 
            <Route path="/notfound" exact element={<NotFound />} />
            <Route path="*" exact element={<NotFound />} />
          </Routes>
        </Page>
      </UserIdContext.Provider>
    </Router>
  );
}

export default App; 