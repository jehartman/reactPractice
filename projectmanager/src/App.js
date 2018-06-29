import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [

      ]
    }
  }

  //this fires off every time the component is re-rendered, 'life cycle' method
  //if you're doing an AJAX call and fetching information from an API you'll want to do it inside this life cycle method as well (either this or componentDidMount)
  componentWillMount(){
    this.setState({projects: [
      {
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        title: 'E-Commerce Shopping Cart',
        category: 'Web Development'
      }
    ]});

  }

  render() {
    return (
      <div className="App">
        <AddProject />
        <Projects projects={this.state.projects} />

      </div>
    );
  }
}



export default App;
