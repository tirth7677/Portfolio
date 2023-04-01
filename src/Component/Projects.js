import React from "react";
const Projects = ({ numbers, mainname, secondname, desc, image }) => {
  return (
    <div className="prodiv">
      <img src={image} className="logo" alt="logo" />
      <div className="projectdiv">
        <p className="numbers">
          <span>
            <b>{numbers}</b>
          </span>
        </p>
        <p className="projectname1">
          <span>
            <b>{mainname}</b>
          </span>
        </p>
        <p className="projectname2">
          <b>{secondname}</b>
        </p>
        <hr className="hr1" />
        <p className="projectfotter">{desc}</p>
      </div>
    </div>
  );
};
export default Projects;
