import React from "react";
import '../styles/site.scss'
import { Link } from "gatsby";
import Nav from './nav'

const Layout = ({className, children}) => {
  return (
    <div className={`Layout${className ? ' ' + className: ''}`}>
      <header>
        <h1>
          <Link to="/">
            fabricio.cloud
          </Link>
        </h1>
        <Nav/>
      </header>
      <main>{children}</main>
      <footer>
        &copy; 2022 - Fabricio Q
      </footer>
    </div>
  );
};

export default Layout;
