import logo from './logo.svg';
import './App.css';
import './utils.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Page, NotFound } from './Page/Page'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar';
import Broadcast from './Broadcast/Broadcast';
import Tape from './Tape/Tape';
import Blog from './Blog/Blog';
import BroadcastEdit from './Broadcast/BroadcastEdit';
import Profile from './Profile/Profile';
const [userId, setUserId] = useState();

const getUserInfo = () => {
  //  TODO: get user info from backend
}

const handleLogout = (event) => {
  //  TODO: logout
};

useEffect(getUserInfo, []);
function App() {
  return (
    <Router>
      <Navbar userId={userId} handleLogout={handleLogout}/>
      <Page>
        <Routes>
          <Route path="/" exact element={<Home />} />
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
