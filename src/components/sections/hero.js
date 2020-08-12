import React, { useEffect, useContext } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { motion, useAnimation } from "framer-motion"

import Context from "../../context/"
import ContentWrapper from "../../styles/ContentWrapper"
import Underlining from "../../styles/Underlining"
import Social from "../social"
import SplashScreen from "../splashScreen"
import Theme from "../../styles/Theme"
import resume from '../../content/Fitzhugh_Software_Resume.pdf'

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 6rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-bottom: 4rem;
    }
    .greetings {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .emoji {
      margin-left: 0.75rem;
      width: 2.2rem;
      height: 2.2rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-left: 1rem;
        width: 3rem;
        height: 3rem;
      }
    }
    .title {
      margin-bottom: 1.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-bottom: 0;
      }
    }
    .subtitle {
      margin-top: -0.75rem;
    }
    .description {
      font-size: 1.125rem;
      margin-bottom: 2rem;
    }
  }
`

const StyledLink = styled.a`
  width: ${({ width }) => (width ? width : "auto")};
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  background: linear-gradient(
    to right,
    ${({ theme, outlined }) => outlined ? theme.colors.primary : theme.colors.background} 50%,
    ${({ theme, outlined }) => outlined? theme.colors.background : theme.colors.primary} 50%
  );
  background-size: 205% 100%;
  background-position: right bottom;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0.125rem solid ${({ theme }) => theme.colors.primary};
  padding: ${({ padding }) => (padding ? padding : ".3rem 1.25rem")};
  transition: all 0.1s ease-out;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
  font-weight: 500;
  color: ${({ theme, outlined }) => outlined ? theme.colors.primary : theme.colors.background};
  &:hover {
    background-position: left bottom;
    color: #000000;
  }
  &:hover svg {
    /* Change svg color to white */
    filter: brightness(0) invert(1);
  }
  svg {
    height: 1rem;
    width: 1rem;
    margin-right: 0.5rem;
    margin-bottom: -0.05rem;
  }
`

const AnimatedUnderlining = motion.custom(Underlining)

const Hero = ({ content }) => {
  const { frontmatter, body } = content[0].node
  const { isIntroDone } = useContext(Context).state

  // Controls to orchestrate animations of greetings, emoji, social profiles, underlining
  const gControls = useAnimation()
  const eControls = useAnimation()
  const sControls = useAnimation()
  const uControls = useAnimation()

  // Start Animations after the splashScreen sequence is done
  useEffect(() => {
    const pageLoadSequence = async () => {
      if (isIntroDone) {
        eControls.start({
          rotate: [0, -10, 12, -10, 9, 0, 0, 0, 0, 0, 0],
          transition: { duration: 2.5, loop: 3, repeatDelay: 1 },
        })
        await gControls.start({
          opacity: 1,
          y: 0,
          transition: { delay: 0.4 },
        })
        await sControls.start({
          opacity: 1,
          x: 0,
        })
        // Animate underlining to hover state
        await uControls.start({
          boxShadow: `inset 0 -2rem 0 ${Theme.colors.secondary}`,
          transition: { delay: 0.4, ease: "circOut" },
        })
      }
    }
    pageLoadSequence()
  }, [isIntroDone, eControls, gControls, sControls, uControls])
  
  return (
    <StyledSection id="hero">
      {!isIntroDone && <SplashScreen />}
      <StyledContentWrapper>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={gControls}>
          <h1 className="title">
            <div className="greetings">
              {frontmatter.greetings}
              <motion.div animate={eControls} style={{ originX: 0.7, originY: 0.7 }}>
                <Img className="emoji" fluid={frontmatter.icon.childImageSharp.fluid} />
              </motion.div>
            </div>
            {frontmatter.title}
          </h1>
          {/* <h2 className="subtitle">
            {frontmatter.subtitlePrefix}{" "}
            Hover state color can be set in useEffect hook 
            <AnimatedUnderlining animate={uControls} color="tertiary" big>
              {frontmatter.subtitle}
            </AnimatedUnderlining>
          </h2> */}
          <div className="description">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={sControls}>
          <StyledLink href={resume}>Resume</StyledLink>
          {/* TODO: style the interactive resume page */}
          {/* <StyledLink outlined href='/resume'
           css={`
              &:hover {
                color: #fff;
              }
           `}
          >Interactive Resume</StyledLink> */}
        </motion.div>
      </StyledContentWrapper>
    </StyledSection>
  )
}

Hero.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        body: PropTypes.string.isRequired,
        frontmatter: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default Hero
