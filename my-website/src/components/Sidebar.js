import React from 'react';
import './Sidebar.css'; // import the CSS file for the Sidebar styles
// import '../icons/ProjectsIcon'
import { ReactComponent as Icon } from '../icons/robot.svg';

function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h3>My Resume</h3>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Icon className="my-icon"/>
          <a href="#projects">Projects</a>   
        </li>
        <li className="sidebar-list-item">
          <a href="#experience">Experience</a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
