import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export const Header = class Header extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div>{this.props.branding}</div>
    )
  }
}

export const HeaderTwo = (props) => {
  const { branding } = props;
  return (
      <nav 
        className='navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0'
      >
        <div className='container'>
          <Link to='#' className='navbar-brand'>{branding}</Link>
          <div>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link to='/' className='nav-link'>
                  <i className='fas fa-home'></i>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/contact/add' className='nav-link'>
                  <i className='fas fa-plus'></i>
                  Add
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/about' className='nav-link'>
                  <i className='fas fa-question'></i>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )  
}

const headingStyle = {
  color: 'green',
  fontSize: '35px'
}

HeaderTwo.defaultProps = {
  branding: 'My App'
}

HeaderTwo.propTypes = {
  branding: PropTypes.string.isRequired
}



