import React from 'react'

import { Link } from 'react-router'

const ProjectrNav = () => (
  <nav>
    <div className="nav-wrapper teal">
      <a href="#home" className="brand-logo center">Projectr</a>
      <ul className="left hide-on-med-and-down">
        <li><Link to="/app/match">Project Finder</Link></li>
        <li className="active"><a href="./dashboard">Dashboard</a></li>
      </ul>
      <ul className="right hide-on-med-and-down">
        <li><a href="/app/message">Messages<span className="new badge">4</span></a></li>
        <li><a href="/app/dashboard">View My Profile</a></li>
        <li><Link to="/app/login">Sign Out</Link></li>
      </ul>
    </div>
  </nav>
)

export default ProjectrNav
