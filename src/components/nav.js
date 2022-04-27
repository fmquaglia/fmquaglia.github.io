import React from "react";
import Link from "gatsby-link";

const Nav = () =>
  (
    <nav className={'Nav'}>
      <Link activeClassName={'current'} to={'/'}>Home</Link>
      <Link activeClassName={'current'} to={'/about'}>About</Link>
    </nav>
  )

export default Nav;
