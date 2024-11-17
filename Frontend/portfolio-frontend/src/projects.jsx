import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projectsData from './projects-database.json'; // Import your JSON database
import techData from './tech-icons.json';
import './Styles/project-style.css';

function Project() {
  const { id } = useParams(); // Extract the project ID from the URL

  // State variables for project data
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectImages, setProjectImages] = useState([]); // Link to the folder containing images
  const [techStack, setTechStack] = useState([]); // Array of technologies used
  const [techLinks, setTechLinks] = useState([]);

  // Populate the state variables using useEffect
  useEffect(() => {
    const project = projectsData[id]; // Find the project based on the ID
    const techIcons = techData.icons;

    if (project) {
      setProjectName(project.name);
      setProjectDescription(project.description);
      setProjectImages(project.images);
      setTechStack(project['tech-stack']);
    }

    if(techIcons){
      setTechLinks(techIcons);
    }
  }, [id]); // Runs whenever the ID changes

  return (
    <>
      <div className="project-page flex-container-row">
        <div className="project-img-section flex-container-col">
          <h1 className="project-name">{projectName}</h1>
          
          <swiper-container slides-per-view="1" space-between="20" navigation="true" pagination="true">
            {projectImages.map((image, index) => (
              <swiper-slide key={index}>
                <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
              </swiper-slide>
            ))}
        </swiper-container>

        <div className="tech-stack-section">
            <ul className='tech-stack'>
              {techStack.map((tech, index) => (
                <li key={index} className='tech-stack-list-elem'>
                  <i class={techLinks[tech]}></i>
                  <span className="tech-name">{tech}</span>
                  </li>
              ))}

            </ul>          
          </div>
        </div>

        {/* Project Description Section */}
        <div className="project-description-section flex-container-col">
          <div className='project-description'>
            <div className='project-description-inner'>
              <h2>Project Overview</h2>
              <p>{projectDescription.objective}</p>
            </div>
            <div className='project-description-inner'>
              <h2>Key Features</h2>
              <ul>
              {projectDescription?.keyFeatures?.length > 0 ? (
                projectDescription.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))
              ) : (
                <p>No key features to display.</p>
              )}
              </ul>
            </div>
            <div className='project-description-inner'>
              <h2>Personal Contribution</h2>
              <p>{projectDescription.myContribution}</p>
            </div>
            <div className='project-description-inner'>
              <h2>Challanges Overcome</h2>
              <ul>
              {projectDescription?.challengesAndSolutions?.length > 0 ? (
                projectDescription.challengesAndSolutions.map((challengeSolutionPair, index) => (
                  <li key={index}>
                    <p><strong>Challenge: </strong>{challengeSolutionPair.challenge}</p>
                    <p><strong>Solution: </strong>{challengeSolutionPair.solution}</p>
                  </li>
                ))
              ) : (
                <p>No challenges to display.</p>
              )}
              </ul>
            </div>
          </div>
            
          
        </div>
        
      </div>
    </>
  );
}

export default Project;