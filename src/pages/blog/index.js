import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import Mailchimp from '../../components/mailchimp'


export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
          <h1>
            Latest Stories
          </h1>
            <div className="content">
              <BlogRoll />
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
      </Layout>
    )
  }
}
