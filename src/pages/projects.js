import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// // import { Container, Card } from 'Common';
// // import starIcon from 'Static/icons/star.svg';
// // import forkIcon from 'Static/icons/fork.svg';
// // import { Wrapper, Grid, Item, Content, Stats } from './styles';
// // import { projectsData } from '../../../data';

// REF: https://www.gatsbyjs.org/docs/use-static-query/
// REF: https://github.com/gatsbyjs/gatsby/tree/master/examples/using-gatsby-source-graphql
// REF: https://www.gatsbyjs.org/docs/environment-variables/
// REF: https://www.gatsbyjs.org/docs/graphql-api/
// REF: https://docs.github.com/en/graphql/guides/using-the-explorer

export default function GithubProjects(props) {
  const { 
    data: {
      github: {
        repositoryOwner: {
          repositories: { edges }
        }
      }  
    } 
  } = props
  console.log(props, edges)
  // edges of the query
  // const {
	// 	github: {
	// 		repositoryOwner: {
	// 			repositories: { edges }
	// 		}
	// 	}
	// } = useStaticQuery(graphql`
  //     query { 
  //       github {
  //         repositoryOwner(login: "developerfitz") {
  //           repositories(first: 6, ownerAffiliations: OWNER, orderBy: { field: STARGAZERS, direction: DESC }) {
  //             edges {
  //               node {
  //                 id
  //                 name
  //                 url
  //                 description
  //                 stargazers {
  //                   totalCount
  //                 }
  //                 forkCount
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // )

  // edges {
  //   node {
  //     id
  //     name
  //     url
  //     description
  //     stargazers {
  //       totalCount
  //     }
  //     forkCount
      // }

  return (
    <div>
      <h1><a href='/'>Github Repos</a></h1>
      {edges.map( ({node}) => (
        <li key={node.id}><a href={node.url}>{node.name.toLowerCase()}</a></li>
        ))}
    </div>
  )
}

// 	return (
//     <h1>Projects from github {node.name}</h1>
// 		// <Wrapper as={Container} id="projects">
// 		// 	{projectsData()}
// 		// 	<Grid>
// 		// 		{edges.map(({ node }) => (
// 		// 			<Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer">
// 		// 				<Card>
// 		// 					<Content>
// 		// 						<h4>{node.name}</h4>
// 		// 						<p>{node.description}</p>
// 		// 					</Content>
// 		// 				</Card>
// 		// 			</Item>
// 		// 		))}
// 		// 	</Grid>
// 		// </Wrapper>
// 	);
// };


// only pages can use pageQueries
// non-page (components??) useStaticQueries


  export const repos = () => {
    const {
		github: {
			repositoryOwner: {
				repositories: { edges }
			}
		}
	} = graphql`
      query { 
        github {
          repositoryOwner(login: "developerfitz") {
            repositories(first: 6, ownerAffiliations: OWNER, orderBy: { field: STARGAZERS, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                }
              }
            }
          }
        }
      }
    `
  return edges
}