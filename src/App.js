import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import LandingPage from "./pages/landing/LandingPage.jsx";
import LoginPage from './pages/auth/LoginPage.jsx';

import "./reset.css";
import SignupPage from './pages/auth/SignupPage.jsx';
import SinglePostPage from './pages/post/SinglePostPage.jsx';
import UploadPostPage from './pages/post/UploadPostPage.jsx';
import ProfilePage from './pages/profile/ProfilePage.jsx';
import AboutPage from './pages/about/AboutPage.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
          <Route path="signin" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="post">
            <Route path=":id" element={<SinglePostPage />} />
            <Route path="upload" element={<UploadPostPage />} />
          </Route>
          <Route path="category" element={<AboutPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="profile">
            <Route path="me" element={<ProfilePage />} />
            <Route path=":id" element={<ProfilePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App