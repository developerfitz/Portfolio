import React from "react"
import styled from "styled-components"
import { motion } from 'framer-motion'

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentWrapper from "../styles/ContentWrapper"

const StyledSection = styled.section`
  width: 100%;
  max-width: 62.5rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  height: auto;
  /* background: ${({ theme }) => theme.colors.background}; */
  background: #222;
  color: #13a740;
  h1 {
    font-size: 1.5rem;
    color: #13a740;
  }
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    max-width: 36rem;
    margin: 0;
    padding: 0;
    height: 100%;
  }
`

const StyledButton = styled.button`
  width: 15.625rem;
  height: 3rem;
  transition: all 0.2s ease-out;
  /* background-color: ${({ theme, color }) => theme.colors[color] || "black"}; */
  background-color: #ccc;
  color: #222;
  padding: 1rem;
  margin: 0 ${({ center }) => center ? "auto" : "0"};
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  text-decoration: none;
  text-align: ${({ textAlign }) => textAlign ? textAlign : "left"};
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    outline: none;
    color: #ccc;
    background: #222222;
    border: 1px solid #ccc;
  }
  svg {
    height: 1rem;
    width: 1rem;
    margin-right: .3rem;
    margin-bottom: -.175rem;
  }
`

const NotFoundPage = () => (
  <Layout splashScreen={false}>
    <SEO title="404: Not found" meta={[{ name: 'robots', content: 'noindex'}]} />
    <StyledSection>
      <StyledContentWrapper>
        <h1>404 Page Not Found</h1>
        <p>Sorry about that...</p>
        <motion.a 
        href='/'
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 250, opacity: 0 }} 
        transition={{ ease: 'easeOut', duration: 1, delay: 0.5 }} 
      >
        <StyledButton type="button" textAlign="center" center >Back</StyledButton>
      </motion.a>
      </StyledContentWrapper>
    </StyledSection>
  </Layout>
)

export default NotFoundPage
