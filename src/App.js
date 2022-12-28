import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import LandingPage from "./pages/landing/LandingPage.jsx";
import LoginPage from './pages/landing/LoginPage.jsx';

import "./reset.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
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