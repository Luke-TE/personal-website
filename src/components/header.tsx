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
        Software engineer, <br />
        CompSci undergraduate, <br />
        President of Filipino Society @ ICL.
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: "space-between",
          maxWidth: "7rem"
        }}
      >
        <div>
          <Link style={{ textDecoration: 'none' }} to="/">
            Home
          </Link>
        </div>
        <div>
          <Link style={{ textDecoration: 'none' }} to="/contact/">
            Contact
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
