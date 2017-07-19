import React, { Component } from 'react';
import Projects from './Components/Projects';
import Addproject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor(){
    super();
    /*state defined in constructor is the initial state of the component*/
    this.state={
      projects:[]
    }
  }
   /*LifeCycle MEthod*/
  /*Data should always be given in "componentWillMount". This life cycle method gets
  triggered whenever react rerender's. This is the better way todo especially when d
  oing AJAX calls and fetching data from outside of API*/
  componentWillMount(){
    this.setState({projects:[
      {
        title:"Ecommerce Shopping cart",
        category:"Web Development"
      },
        {
          title:"Screen readers",
          category:"Accesability"
        },
        {
          title:"Application",
          category:"Mobile App Development"
        }
    ]
  });
  }
  render() {
    return (
      <div className="App">
        My App
        <Addproject/>
        {/* state(projects data) is passed to the Projects component */}
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
