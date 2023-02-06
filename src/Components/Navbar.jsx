import React, { Component } from 'react';
import './Navbar.css'
import Modal from './Modal';


// import { Link } from 'react-router-dom';

class Navbar extends Component {
  state={clicked: false};
  handleClick = () =>{
    this.setState({clicked:!this.state.clicked})
  }
  
  render() {
    return (
      <nav>
        <div id="mobile" onClick={this.handleClick}>
          <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <a href='index.html'><svg id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" class="ccompli1" fill="#007AFF"></path> <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" class="ccustom" fill="#312ECB"></path> </svg></a>
        <div>
          <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>

            {/* <li><link className='active' to="/">Home</link></li>
            <li><link to="/about">About</link></li> */}

            <li><a className='active' href="index.html">Home</a></li>
            {/* <i class="fa fa-home" aria-hidden="true"></i> */}

            <li><a href="index.html">Shop</a></li>
            {/* <i class="fa fa-shopping-bag" aria-hidden="true"></i> */}

            <li><a href="index.html">Blog</a></li>
            <li><a href="index.html">About</a></li>
            <li><a href="index.html">Contact</a></li>
            {/* <i class="fa fa-address-book" aria-hidden="true"></i> */}
          </ul>
        </div>

        <div>
          <Modal/>
        </div>

      </nav>
      
    );
  }
}

export default Navbar;

