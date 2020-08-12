import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
// import styled, { ThemeProvider } from "styled-components"
import ContentWrapper from "../styles/ContentWrapper"

// import Theme from "../styles/Theme"
// import GlobalStyle from "../styles/GlobalStyle"
// import Header from "../components/header"
// import Footer from "../components/footer"

const StyledContainer = styled.div`
  .test {
    color: green;
  }
`

// const StyledContentWrapper = styled(ContentWrapper)`
const StyledContentWrapper = styled.div`
  p {
    width: 100%;
    /* Don't stretch container over the full page width */
    max-width: 45rem;
    height: 100%;
    display: inline-block;
    p {
      margin-top: 0;
      margin-bottom: 0;
    }
    a {
      text-decoration: none;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 3rem;
      margin-bottom: 2rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        flex-direction: row;
        align-items: center;
        margin-bottom: 3rem;
      }
      .avatar {
        width: 100%;
        max-width: 8.75rem;
        border-radius: 50%;
        margin-right: 4rem;
        margin-bottom: 2rem;
        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
          margin-bottom: 0;
        }
      }
      .details {
        font-size: 1.125rem;
        line-height: 2rem;
      }
    }
  }
`



export default function Resume({data}) {
  const { allMdx: { edges } } = data
  const { node } = edges[0]
  console.log(node)
  // console.log(props)
  return (
    <Layout>
      <SEO>
        <StyledContainer>
          <div className='test'>
            <h1>{node.frontmatter.title}</h1>
            <MDXRenderer>{node.body}</MDXRenderer>
          </div>
        </StyledContainer>
      </SEO>
    </Layout>
  )
}


export const resume = graphql`
  query {
    allMdx(filter: {fileAbsolutePath: {regex: "/resume/"}}) {
      edges {
        node {
          frontmatter {
            title
          }
          body
        }
      }
    }
  }
`