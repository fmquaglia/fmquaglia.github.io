import React from "react";
import { Link } from "gatsby";

const Nav = () => {
  return (
    <header>
      <h1 className={'logo'}>
        <Link to={'/'}>
          Fabricio.cloud
        </Link>
      </h1>
      <nav>
        <Link activeClassName={'current'} to={'/'}>Home</Link>
        <Link activeClassName={'current'} to={'/blog'}>Blog</Link>
      </nav>
    </header>
  )
};

export default Nav;
