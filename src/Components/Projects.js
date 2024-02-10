import React from "react";

function Projects() {
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>
        PROJECTS
        </h2>
      <h4>
        Here is a list of the projects that our company has been involved in:{" "}
      </h4>
      <div className="card" style={{width: "18rem"}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Project title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button href="#" className="btn btn-primary">
            Read More ...
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
