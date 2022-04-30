import React from "react";
import { Link } from "gatsby";
import '../styles/site.scss'
import Nav from "./nav";

const Layout = ({children}) => (
  <div className="Layout">
    <Nav/>
    <main>
      {children}
    </main>
    <footer>
      &copy; 2022 - Fabricio Q
    </footer>
  </div>
);

export default Layout;
