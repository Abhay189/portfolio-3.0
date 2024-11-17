import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './homepage';
import Project from './projects';
import './Styles/navbar.css';
import projectsData from './projects-database.json';



function App() {
  const [projectNames, setProjectNames] = useState([]);

  useEffect(() => {
    const names = Object.keys(projectsData); // Extract project IDs from the database
    setProjectNames(names);
  }, []);

  return (
    <>
      <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li className="dropdown">
          <span>Projects</span>
          <ul className="dropdown-menu">
            {projectNames.map((projectId) => (
              <li key={projectId}>
                <Link to={`/projects/${projectId}`}>{projectsData[projectId].name}</Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects/:id" element={<Project />} />
        
      </Routes>
    </>
    
  );
}

export default App
