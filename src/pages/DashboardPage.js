import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import AppWithRouterAccess from "../components/AppWithRouterAccess";
import StyledDash from "../styles/StyledDash";

const DashboardPage = () => (
  <StyledDash>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/signup">Sign Up</Link>
      <Router><AppWithRouterAccess /></Router>
    </nav>
    <h1>Dashboard</h1>
    <p>
      Welcome to the Redux Blog, a practical exercise in building with React
      Redux. FYI the blog posts are Lorem Ipsum until I can find something more
      interesting to substitute in there. Thanks for checking it out!
    </p>
    <Link to="/posts" className="button">
      View Posts
    </Link>
  </StyledDash>
);

export default DashboardPage;
