import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            contact {
              github
              gitconnected
              linkedin
              email
            }
          }
        }
      }
    `,
  );

  return data.site.siteMetadata;
};

export default useSiteMetadata;
