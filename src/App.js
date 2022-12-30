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
import CreatePostPage from './pages/post/CreatePostPage.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="post">
            <Route path=":id" element={<SinglePostPage />} />
            <Route path="create" element={<CreatePostPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App