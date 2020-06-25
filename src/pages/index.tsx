import React from 'react';
import { PageProps, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

type DataProps = {
  allCustomApi: {
    nodes: {
      projects: {
        displayName: string;
        summary: string;
        githubUrl: string;
        website: string;
      }[];
    }[];
  };
};

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h2>My projects</h2>
      <div>                  
          {data.allCustomApi.nodes[0].projects.map(project => (
            project.githubUrl ? (
              <p>
                <a href={project.githubUrl}>{project.displayName}</a>
                {project.website ? <a href={project.website}> Website</a> : ""} -{' '}
                {project.summary}
              </p> 
            ) : ""
          ))}{""}        
      </div>
    </div>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  {
    allCustomApi {
      nodes {
        projects {
          displayName
          summary
          githubUrl
          website
        }
      }
    }
  }
`;
