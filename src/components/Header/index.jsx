import React, { useEffect, useRef, useState } from "react";

import logo from "@/assets/images/logo.png";
import logo_mobile from "@/assets/images/logo_mobile.png";

const navLinks = [
  {
    text: "Home",
    url: "#",
  },
  {
    text: "Services",
    url: "#",
  },
  {
    text: "Our Project",
    url: "#",
  },
  {
    text: "About us",
    url: "#",
  },
];

function Header() {
  const [ showNav, setShowNav ] = useState( false );
  const headerRef = useRef( null );
  useEffect( () => {
    let headerSticky = function () {
      let distance = ( window.innerWidth < 768 ) ? 150 : 250;
      if ( window.scrollY > distance ) {
        headerRef.current.classList.add( "is-sticky" );
      } else {
        headerRef.current.classList.remove( "is-sticky" );
      }
    }
    window.addEventListener( 'scroll', headerSticky );
    return () => window.removeEventListener( 'scroll', headerSticky );
  }, [] );
  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <a href="#" className="header-logo">
          <picture>
            <source media="(min-width:768px)" srcSet={logo} width="132" height="40" />
            <img src={logo_mobile} alt="Enver Digital Agency" width="115" height="34" />
          </picture>
        </a>
        <ul className="header-navigation">
          {navLinks.map( ( item, index ) => (
            <li className="header-navigation-item" key={index}>
              <a href={item.url} className="header-navigation-link">{item.text}</a>
            </li>
          ) )}
        </ul>
        <a href="#" className="button-contact button-secondary"><span>Contact us</span></a>
        <div className={`button-menu ${ showNav ? 'is-active' : '' }`} onClick={() => { setShowNav( !showNav ) }}>
          <span></span><span></span><span></span>
        </div>
      </div>
      <nav className={`navigation-mobile  ${ showNav ? 'is-active' : '' }`}>
        <div className="container">
          <ul className="navigation-list">
            {navLinks.map( ( item, index ) => (
              <li className="navigation-item" key={index}>
                <a href={item.url} className="navigation-link">{item.text}</a>
              </li>
            ) )}
            <li className="navigation-item"><a href="#" className="navigation-link">Contact us</a></li>
          </ul>
        </div>
      </nav>
    </header >
  );
}

export default Header;
