//import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homefeed from "./components/Homefeed/Homefeed";
import Profile from "../src/components/Profile/Profile";
import NavBar from "../src/components/Navbar/Navbar";
import Discover from "./components/Discover/Discover";
import GlobalStyles from "./utils/GlobalStyles";
import LandingPage from "../src/components/LoginPage/LandingPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homefeed" element={<Homefeed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
      <GlobalStyles />
    </Router>
  );
}

export default App;
