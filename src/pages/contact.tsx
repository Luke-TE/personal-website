import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import useSiteMetadata from '../hooks/useSiteMetadata';

const ContactPage: React.FC<PageProps> = () => {
  const {
    email, linkedin, github, gitconnected, phone,
  } = useSiteMetadata().contact;

  return (
    <Layout>
      <SEO title="Contact" />
      <h2>Contact me</h2>
      <i>Recruitment</i>
      <p>
        Contact Number:
        {' '}
        <a href={`tel:${phone}`}>{phone}</a>
        <br />
        Email:
        {' '}
        <a href={`mailto:${email}`}>{email}</a>
        {' '}
      </p>
      <p />

      <i>Social Media</i>
      <p>
        GitHub:
        {' '}
        <a href={`https://github.com/${github}`}>{github}</a>
        {' '}
        <br />
        gitconnected:
        {' '}
        <a href={`https://gitconnected.com/${gitconnected}`}>
          {gitconnected}
        </a>
        {' '}
        <br />
        LinkedIn:
        {' '}
        <a href={`https://www.linkedin.com/in/${linkedin}`}>{linkedin}</a>
        {' '}
        <br />
      </p>
      <p />
      <p />
    </Layout>
  );
};

export default ContactPage;
