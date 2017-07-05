import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {
  constructor(){
    super();
    /*state defined in constructor is the initial state of the component*/
    this.state={
      projects:[
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
    }
  }
  render() {
    return (
      <div className="App">
        My App
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
