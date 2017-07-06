import React, { Component } from 'react';

class AddProjects extends Component {
 static defaultProps={
   categories:['Web Development', 'Accesability', 'Mobile App Development']
 }
  render() {
  let categoryoptions=this.props.categories.map(category=>{
    return <option key={category} value="category">{category}</option>
  })
    return (
      <div >
        <h3>Add Projects</h3>
        <form><div>
        <label>Title</label><br/>
        <input type="text" ref="title"/>
        </div>
        <div>
          <label>Category</label><br/>
          <select ref="Category">
            {categoryOptions}
          </select>
        </div>
      </form>
      </div>
    );
  }
}

export default Projects;
