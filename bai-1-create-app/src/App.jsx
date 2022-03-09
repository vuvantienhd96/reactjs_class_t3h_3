import React, { Component } from 'react';
import './App.css';
import Contacts from './components/contacts/Contacts';
import { Header, HeaderTwo } from './components/layouts/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';
import AddContact from './components/contacts/AddContact';

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
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>

    );
  }

}

export default App;
