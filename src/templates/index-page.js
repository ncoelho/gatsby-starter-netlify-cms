import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import Mailchimp from '../components/mailchimp'


export const IndexPageTemplate = ({
  title,
  subheading,
  image,
  heading,
  mainpitch,
  link,
  description,
  intro,
}) => (
  <div>
    <section className="section">
      <div className="container jumbobox">
          <h1 className="highlight1">
              {title}
            </h1>
          <div>
            <h2 className="highlight2">
              {subheading}
            </h2>
          </div>
          <div className="buttons">
            <a href="/" className="btn">Next workshop</a>
            <a href="https://careerhackingforwomen.slack.com/join/shared_invite/enQtODAyMTIyNzcwMDY5LWRlOTgxNjI2MDhkMzk5M2FhMGI1OTc0NGFhMWNlNDYzNmYxZTk3YWJiODQxMWE5MGViMDAyMjdiZWM0N2YwNmI" target="_blank" className="btn2">Join the community</a>
          </div>
      </div>
      <div className="container highlight">
        <h3 className="has-text-weight-bold is-size-3">Next workshop</h3>
        <div
          className="highlight-image border8"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
          }}
        >
        </div>
  
        <div className="tile">
          <h2 className="title">{mainpitch.title}</h2>
        </div>
        <div className="tile">
          <p>{mainpitch.description}</p>
        </div>
        <div className="columns">
          <div className="column is-5">
            <div className="tile cta">
              <a className="btn large" href="{mainpitch.link}" target="_blank">Tell me more!</a>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section className="section workshops">
         <div className="container">
            <div className="columns">
              <div className="column is-12">
                <h3 className="has-text-weight-bold is-size-2">
                  Workshops
                </h3>
              </div>
            </div>
            <Features gridItems={intro.blurbs} />
            <div className="columns">
              <div className="column is-12 has-text-centered">
                <Link className="btn" to="/workshops">
                  See all workshops
                </Link>
              </div>
            </div>
            <div className="community-box">
              <div className="columns">
                <div className="column is-7">
                  <h4>Join our community</h4>
                  <p>A chat group with like minded people, always available for support, questions and some fun!</p>
                </div>
                <div className="column is-5 has-text-centered">
                  <a href="http://google.com" className="btn">
                    Join now
                  </a>
                </div>
              </div>
            </div>
            <div className="column is-12 blog-home">
              <h3 className="has-text-weight-semibold is-size-2">
                Latest stories
              </h3>
              <BlogRoll />
              <div className="column is-12 has-text-centered">
                <Link className="btn" to="/blog">
                  Read more
                </Link>
              </div>
            </div>
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="mailbox">
                  <h5>Subscribe for updates</h5>
                  <Mailchimp />

                </div>
              </div>
            </div>
        </div>
      </section>
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  link: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        image={frontmatter.image}
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
        link={frontmatter.link}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subheading
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        mainpitch {
          title
          description
          link
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
