import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Features from '../../components/Features'
import Mailchimp from '../../components/mailchimp'


export const Workshops = ({
  intro,
}) => (
  <div>
      <section className="section workshops">
         <div className="container">
            <div className="columns">
              <div className="column is-12">
                <h3 className="has-text-weight-bold is-size-3">
                  Workshops
                </h3>
              </div>
            </div>
            <Features gridItems={intro.blurbs} />
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

Workshops.propTypes = {
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <Workshops
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
  query Workshops {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
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
        }
      }
    }
  }
`
