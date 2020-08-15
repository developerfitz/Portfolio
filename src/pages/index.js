import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Logo from '../components/logo'
import Button from "../styles/Button"
import linkedinIcon from '../content/icons8-linkedin_32a.svg'
import githubIcon from '../content/icons8-github_32.svg'
import telegramIcon from '../content/icons8-telegram-app_32.svg'
import twitterIcon from '../content/icons8-twitter_32.svg'
import resume from '../content/Fitzhugh_Software_Resume.pdf'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/sections/hero"
import Repos from "../components/sections/repos" 
import About from "../components/sections/about"
import Interests from "../components/sections/interests"
import Overview from "../components/sections/overview"
import Contact from "../components/sections/contact"
import { splashScreen } from "../config"



const ComingSoon = styled.div`
  display: flex:
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #13a740;

  h1, h2, h3, h4 {
    display: flex;
    flex-direction: column;
    /* color: mediumseagreen; */
    color: #13a740;
  }
  h3 {
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
  p {
    color: #ddd;
  }
  .email {
    color: #ddd;
    transition: all 0.2s ease-out;
    &:hover{
      color: #eb952a;
      transform: scale(1.3);
    }
  }
  .socialIcons a {
    margin: 0.75rem;
    /* transition: all 0.2s ease-in; */
    /* &:hover { */
      /* transform: scale(1.3); */
    }
  /* .socialIcons .icon {
    transition: all 0.2s ease-in;
    &:hover {
      transform: scale(1.3);
    } */
  }
    /* padding-top:0.25; */
    /* display: flex; */
    /* list-style-type: none; */
    /* text-align: center; */
  }
`

const StyledButton = styled.button`
  width: 15.625rem;
  height: 3rem;
  transition: all 0.2s ease-out;
  /* background-color: ${({ theme, color }) => theme.colors[color] || "black"}; */
  background-color: #eb952a;
  color: #222;
  padding: 1rem;
  margin: 0 ${({ center }) => center ? "auto" : "0"};
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  /* border-radius: #13a740; */
  text-decoration: none;
  text-align: ${({ textAlign }) => textAlign ? textAlign : "left"};
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    outline: none;
    color: #eb952a;
    background: #222222;
    border: 1px solid #eb952a;
  }
  svg {
    height: 1rem;
    width: 1rem;
    margin-right: .3rem;
    margin-bottom: -.175rem;
  }
`
const div = {
  visible: {
    opacity: 1,
    transition: {
      // when: 'beforeChildren',
      staggerChildren: 1
    }
  },
  hidden: { opacity: 0 }
}

const icons = {
  visible: { 
    y: 0, 
    opacity: 1, 
    // transition: {
    //   // duration: 0.3,
    //   ease: 'easeOut' 
    // },
  },
  hidden: { y: 50, opacity: 0 },
  hover: {
    scale: 1.3,
    transition: {
      duration: 0.2,
      delay: 0
    }
  }
}

const IndexPage = ({ data }) => (
  <Layout splashScreen={splashScreen}>
    <SEO title="Developer Fitz - My Techlab" />
    {/* <Hero content={data.hero.edges} /> */}
    {/* Articles is populated via Medium RSS Feed fetch */}
    {/* <Repos /> */}
    {/* <About content={data.about.edges} /> */}
    {/* <Interests content={data.interests.edges} /> */}
    {/* <Overview content={data.overview.edges} /> */}
    {/* <Contact content={data.contact.edges} /> */}
    {/* <StyledHero> */}
    <ComingSoon>
      {/* <h1>Portfolio Underconstruction</h1> */}
      <h1
        // animate={{ x: 0, opacity: 1 }}
        // initial={{ x: -200, opacity: 0 }}
        // transition={{ ease: 'easeOut', duration: 0.5, delay: 0.3 }}
      >Coming Soon</h1>
      {/* TODO: change size back to 89.017 */}
      <motion.div 
        // animate={{ scale: [0.5, 0.8, 0.2, 1.2, 0.9, 1.3, 1]}}
        // transition={{ duration: 2 }}
      >
        <Logo />
      </motion.div>
      <motion.div 
        animate={{ rotateX: 0 }}
        initial={{ rotateX: 90 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        // transition={{ iterationCount: 'infinite'}}
      >
        <motion.h3 
          // animate={{ rotateX: 0 }}
          // initial={{ rotateX: 90 }}
          // transition={{ duration: 0.5, delay: 1 }}
          // transition={{ iterationCount: 'infinite'}}
        >Get In Touch</motion.h3>
        <a className='email' href="mailto:julius@developerfitz.com">julius@developerfitz.com</a>
      </motion.div>
        {/* <button><a href=''>Github</a></button> */}
        {/* <button><a href=''>Linkedin</a></button> */}
        {/* <button><a href=''>Telegram</a></button> */}
        {/* <button><a href=''>Twitter</a></button> */}
      <motion.div 
        // animate='visible' //{{ opacity: 1 }} 
        // initial='hidden' //{{ y: 50, opacity: 0 }}
        // variants={div}
        // transition={{ duration: 1, delay: 1 }}
        className="socialIcons"
      >
        <motion.a 
          animate='visible'
          initial='hidden'
          // animate={{ y: 0, opacity: 1 }}
          // initial={{ y: 50, opacity: 0}}
          whileHover='hover'
          // whileHover={{ scale: 1.2 }}
          // onHoverStart={e => {}}
          // onHoverEnd={e => {}}
          variants={icons}
          transition={{ duration: 0.3, delay: 1, ease: 'easeOut' }}
          className='icon'
          href='https://github.com/developerfitz'
        >
          <img className='icon' src={githubIcon}/>
        </motion.a>
        <motion.a 
          animate='visible'
          initial='hidden'
          whileHover='hover'
          variants={icons}
          transition={{ duration: 0.3, delay: 1.8, ease: 'easeOut' }}
          className='icon'
          href='https://www.linkedin.com/in/fitzj/'
        >
          <img src={linkedinIcon}/>
        </motion.a>
        <motion.a 
          animate='visible'
          initial='hidden'
          whileHover='hover'
          variants={icons}
          transition={{ duration: 0.3, delay: 1.4, ease: 'easeOut' }}
          className='icon'
          href='https://twitter.com/DeveloperFitz'
        >
          <img src={twitterIcon}/>
        </motion.a>
        <motion.a 
          animate='visible'
          initial='hidden'
          whileHover='hover'
          variants={icons}
          transition={{ duration: 0.3, delay: 2.2, ease: 'easeOut'}}
          className='icon'
          href='https://t.me/fitzj'
        >
          <img src={telegramIcon}/>
        </motion.a>
      </motion.div>
      <motion.h3
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.7, delay: 3, ease: 'easeOut' }}
      >Looking for a developer?</motion.h3>
      {/* TODO: use motionjs to have the slide affect button */}
      <motion.a 
        href={resume}
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 250, opacity: 0 }} 
        transition={{ ease: 'easeOut', duration: 1, delay: 4.2 }} 
      >
        <StyledButton type="button" textAlign="center" center
        >View Resume</StyledButton>
      </motion.a>
    </ComingSoon>
    {/* </StyledHero> */}
  </Layout>
)

IndexPage.propTypes = { 
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const pageQuery = graphql`
{
  hero: allMdx(filter: {fileAbsolutePath: {regex: "/hero/"}}) {
    edges {
      node {
        body
        frontmatter {
          greetings
          title
          icon {
            childImageSharp {
              fluid(maxWidth: 60, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  about: allMdx(filter: {fileAbsolutePath: {regex: "/about/"}}) {
    edges {
      node {
        body
        frontmatter {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 400, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  interests: allMdx(filter: {fileAbsolutePath: {regex: "/interests/"}}) {
    edges {
      node {
        exports {
          shownItems
          interests {
            name
            icon {
              childImageSharp {
                fixed(width: 20, height: 20, quality: 90) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
        frontmatter {
          title
        }
      }
    }
  }
  overview: allMdx(filter: {fileAbsolutePath: {regex: "/overview/"}, frontmatter: {visible: {eq: "true"}}}, sort: {fields: [frontmatter___position], order: ASC}) {
    edges {
      node {
        body
        frontmatter {
          title
          category
          emoji
          external
          github
          screenshot {
            childImageSharp {
              fluid(maxWidth: 400, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          tags
          position
          buttonVisible
          buttonText
        }
      }
    }
  }
  contact: allMdx(filter: {fileAbsolutePath: {regex: "/contact/"}}) {
    edges {
      node {
        body
        frontmatter {
          title
          name
          email
          profileImage {
            childImageSharp {
              fluid(maxWidth: 400, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`
