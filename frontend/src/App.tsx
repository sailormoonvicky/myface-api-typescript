import React, {useState} from "react";
import { PostGallery } from './components/post-list';
import Switch, { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import { UserDetail } from './components/user-detail.tsx';
import './App.css'
import {UserList} from './components/user_list.tsx';

function App() {
  const [userID, setuserID] = useState(0);

  return (
    <Router>
      <h1>MyFace</h1>
      <Routes>
        <Route path='/posts'
              element={<PostGallery />} />
        <Route path='/users'
              element={<UserList setuserID = {setuserID}/>} />
        <Route path={`/users/${userID}`}
              element={<UserDetail userID={userID}/>} /> 
      </Routes>


    </Router>
  )
}

export default App
