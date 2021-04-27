import React from "react";

function ProjectItem({ name, about, technologies }) {
  // console.log(technologies)
  const techs = technologies.map(tech => {
    return <span key={tech}>{tech}</span>
  })
  // console.log(techs)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techs}
      </div>
    </div>
  );
}

export default ProjectItem;
