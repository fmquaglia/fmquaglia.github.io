import React from "react";
import '../styles/site.scss'
import { Link } from "gatsby";

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
