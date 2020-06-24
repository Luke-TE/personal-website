import React from 'react';

import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage: React.FC<PageProps> = (props: PageProps) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h2>My Projects</h2>
      <ul>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
    </div>
  </Layout>
);

export default IndexPage;
