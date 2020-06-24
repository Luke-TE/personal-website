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
        maxWidth: 1080,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1>Hi, I'm Luke.</h1>
      <p>
        Software Engineer, CompSci undergraduate, President of Filipino Society at Imperial College London.
      </p>
      <div
        style={{
          display: 'flex',
        }}
      >
        <p>
          <Link style={{ textDecoration: 'none' }} to="/">
            Home
          </Link>
        </p>
        <p>
          <Link style={{ textDecoration: 'none' }} to="/contact/">
            Contact
          </Link>
        </p>
      </div>
    </div>
  </header>
);

export default Header;
