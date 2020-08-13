import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout'


export default function testTemplate (props) {
  // const { 
  //   data: {
  //     github: {
  //       repositoryOwner: {
  //         repositories: { edges }
  //       }
  //     }  
  //   } 
  // } = props
  // console.log(edges)
  return (
    <Layout>
      <div>
        <h1>Test</h1>
      </div>
    </Layout>
  )
}


//   export const repos = () => {
//     const {
// 		github: {
// 			repositoryOwner: {
// 				repositories: { edges }
// 			}
// 		}
// 	} = graphql`
//       query { 
//         github {
//           repositoryOwner(login: "developerfitz") {
//             repositories(first: 6, ownerAffiliations: OWNER, orderBy: { field: STARGAZERS, direction: DESC }) {
//               edges {
//                 node {
//                   id
//                   name
//                   url
//                   description
//                   stargazers {
//                     totalCount
//                   }
//                   forkCount
//                 }
//               }
//             }
//           }
//         }
//       }
//     `
//   return edges
// }