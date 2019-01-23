import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Wedding website for Hannah and Martin Szauer' },
            { name: 'keywords', content: 'gatsby, wedding, sweet, szauer, hungarian, destination, marriage' },
            { name: 'viewport', content:'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no' },
          ]}
        >
          <html lang="en" />
        </Helmet>
          <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
          <section
            style={{
              margin: '0 auto',
              maxWidth: '1600px',
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: '0',
            }}
          >
            {children}
          </section>
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
