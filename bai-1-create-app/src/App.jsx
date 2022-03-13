import React, { Component } from 'react';
import './App.css';
import Contacts from './components/contacts/Contacts';
import { Header, HeaderTwo } from './components/layouts/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';
import AddContact from './components/contacts/AddContact';

// import router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import ContactDetail from './components/contacts/ContactDetail';

// class component
class App extends Component {
  constructor(props) {
    super(props);
  }
  //  state -- trang thai
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <HeaderTwo branding={"Manager App"} />
            <div className='container'>
              <Switch>
                <Route exact path="/" component={Contacts}/>
                <Route exact path="/contact/add" component={AddContact}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact/:id" component={ContactDetail}/>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>

    );
  }

}

export default App;
