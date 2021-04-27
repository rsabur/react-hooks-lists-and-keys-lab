import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectsObj = projects.map(project => {
    return <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies}/>
  })
  // console.log(projectsArr);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectsObj}</div>
    </div>
  );
}

export default ProjectList;
