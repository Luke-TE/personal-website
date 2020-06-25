import React from 'react';

const Footer: React.FC = () => (
  <footer
    style={{
      marginTop: '5.5rem',
    }}
  >
    ©
    {' '}
    {new Date().getFullYear()}
    {' '}
    Luke Texon. All rights reserved.
    {' '}
    <br />
    Built with
    {' '}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
    {' '}
    and
    {' '}
    <a href="https://www.netlify.com/">Netlify</a>
    .
  </footer>
);

export default Footer;
