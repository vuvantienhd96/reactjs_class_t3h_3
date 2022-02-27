import React, { Component } from 'react'
import PropTypes from 'prop-types';

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
          <a href='#' className='navbar-brand'>{branding}</a>
          <div>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <a href='/' className='nav-link'>Home</a>
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



