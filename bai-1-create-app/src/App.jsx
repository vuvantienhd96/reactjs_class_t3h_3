import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// class component
class App extends Component { 
  constructor(props){
    super(props);
  }

   // this.props
   // this.state
   // jsx

  render(){
    return (
      <div className="App">
       <a href='#'>learn react</a>
      </div>
    );
  }
  // render(){
  //   return (
  //     React.createElement('div', {className: 'App'}, React.createElement('a', {href: '#'}, 'learn react'))
  //   );
  // }
}

export default App;
