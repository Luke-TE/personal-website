import { Link } from 'gatsby';
import React from 'react';

const Header: React.FC = () => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div
        style={{
          display: 'flex',
        }}
      >
        <Link to="/">My Projects</Link>
        <Link to="/contact/">Contact Me</Link>
      </div>      
      <h1>Hi, I'm Luke.</h1>
      <p>
        Filipino computer science student at Imperial College London, Filipino
        Society president.
      </p>
    </div>
  </header>
);

export default Header;
