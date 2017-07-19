import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class AddProject extends Component {
static defaultProps = {
  categories:["Web Development", "Accesability", "Mobile App Development"]
}
  render() {
  let categoryoptions=this.props.categories.map(category => {
    return <option key={category} value="category">{category}</option>
  });
return (
    <div>
    <h1>AddProject</h1>
    <form>
      <div>
        <label>Title</label><br/>
        <input type="text" ref="Title" maxlength="15"/>
      </div>
      <div>
        <label>Category</label><br/>
        <select type="text" ref="Category">
          {categoryoptions}
        </select>
      </div>

    </form>

    </div>
    );
  }
}

export default AddProject;
