import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  render() {
    let projectitems;
    if(this.props.projects){
      projectitems=this.props.projects.map(project=>{
    return(
      /*Props(projects data) in Projects is passed to ProjectItem after mapping them*/
        <ProjectItem key={project.title} project={project}/>
      );
      });
    }

    return (
      <div className="Projects">
      {projectitems}

      </div>
    );
  }
}

export default Projects;
