import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
class Projects extends Component {
  render() {
    let ProjectItems;
    if(this.props.projects){
      ProjectItems=this.props.projects.map(Project=>{
      // console.log(Project);
      return {
        <ProjectItem Project={project}/>
      }
      });
    }
    return (
      <div className="Projects">
        {ProjectItems}
      </div>
    );
  }
}

export default Projects;
