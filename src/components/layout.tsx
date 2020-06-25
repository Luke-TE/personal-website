import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';
import './layout.css';

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1080,
        padding: '0 1.0875rem 1.45rem',
      }}
    >
      <main>{children}</main>
      <Footer />
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
