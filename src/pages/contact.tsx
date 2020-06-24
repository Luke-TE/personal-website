import React from 'react';
import { Link, PageProps } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import useSiteMetadata from '../hooks/useSiteMetadata';

const ContactPage: React.FC<PageProps> = (props: PageProps) => {
  const {
    email,
    linkedin,
    github,
    gitconnected,
  } = useSiteMetadata();

  return (
    <Layout>
      <SEO title="Contact Me" />
      <h2>Contact Me</h2>
      <p>CV:</p>
      <p>
        Email: <a href={`mailto:${email}`}>{email}</a>{' '}
      </p>
      <p>
        GitHub: <a href={`https://github.com/${github}`}>{github}</a>{' '}
      </p>
      <p>
        GitConnected: <a href={`https://gitconnected.com/${gitconnected}`}>{gitconnected}</a>
      </p>
      <p>
        LinkedIn: <a href={`https://www.linkedin.com/in/${linkedin}`}>{linkedin}</a>
      </p>
    </Layout>
  );
};

export default ContactPage;
