import React from "react";
import { Link } from "gatsby";
import '../styles/site.scss'

const Layout = ({children}) => (
  <div className="Layout">
    <header>
      <h1>
        <Link to="/">
          fabricio.cloud
        </Link>
      </h1>
    </header>
    <main>{children}</main>
    <footer>
      &copy; 2022 - Fabricio Q
    </footer>
  </div>
);

export default Layout;
