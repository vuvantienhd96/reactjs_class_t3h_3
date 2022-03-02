import React, { Component } from 'react';
import './App.css';
import Contacts from './components/Contacts';
import { Header, HeaderTwo } from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';

// class component
class App extends Component {
  constructor(props) {
    super(props);
  }
  //  state -- trang thai
  render() {
    return (
      <Provider>
        <div className="App">
          <HeaderTwo branding={"Manager App"} />
          <div className='container'>
            <Contacts />
          </div>
        </div>
      </Provider>

    );
  }

}

export default App;
