import React from 'react';
import { Link } from 'react-router-dom'

import StyledDash from '../styles/StyledDash';

const DashboardPage = () => (
  <StyledDash>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/signup">Sign Up</Link>
      </nav>
    <h1>Dashboard</h1>
    <p>Welcome to the Redux Blog, a practical exercise in building with React Redux.</p>
    <Link to="/posts" className="button">
      View Posts
    </Link>
  </StyledDash>

)
 


export default DashboardPage
