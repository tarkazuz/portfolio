import React from 'react';
import {NavLink} from "react-router-dom";


function toggleBurger(){
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
}

function Navbar (){
    return(
        <div > 
<nav className="navbar is-transparent is-fixed-top elem-border">
  <div className="navbar-brand myBrandTitle">
    <a className="navbar-item" >
    <NavLink to="/" className="navbar-item" >Zuza's Portfolio</NavLink>
    </a>
    <a role="button" className="navbar-burger" data-target="navbarTransparent" aria-expanded="false"
    onClick={toggleBurger}> 
        <span></span>
        <span></span>
        <span></span>
    </a>
  </div>

  <div id="navbarTransparent" className="navbar-menu">
    <div className="navbar-end">
      <NavLink to="/" exact className="navbar-item" activeClassName="selected" >Home</NavLink>
      <NavLink to="/about" className="navbar-item" activeClassName="selected">About</NavLink>
      <NavLink to="/projects" className="navbar-item" activeClassName="selected">Projects</NavLink>
      <NavLink to="/contact" className="navbar-item" activeClassName="selected">Contact</NavLink>
    </div>

  </div>
</nav>
</div>
    )
}

export default Navbar;
