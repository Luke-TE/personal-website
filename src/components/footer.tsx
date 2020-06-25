import React from 'react';

const Footer: React.FC = () => (
  <footer
    style={{
      marginTop: '4rem',
    }}
  >
    <hr />
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
