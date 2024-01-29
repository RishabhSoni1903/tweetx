import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Feed from './pages/Feed';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Users from './pages/Users';
import UserProfile from './components/UserProfile';
import Followers from './components/Followers';
import Following from './components/Following';
import MyPosts from './components/MyPosts';

function App() {

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route exact path='/' element={<Feed />}></Route>
          <Route path='/profile' element={<UserProfile userData={userData} />}>
            <Route path='posts' element={<MyPosts />}></Route>
            <Route path='followers' element={<Followers />}></Route>
            <Route path='following' element={<Following />}></Route>
          </Route>
          <Route path='/users' element={<Users />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
