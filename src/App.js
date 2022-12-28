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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          {/* <Route path="post">
          <Route path=":id" element={<Post />} />
          <Route path="test" element={<Post />} />
          <Route path="create" element={<PostForm />} />
        </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App