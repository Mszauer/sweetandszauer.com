import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import React from 'react'

const Header = ({ siteTitle, menuLinks }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 285, maxHeight: 120) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <header
        style={{
          background: '#145314',
          marginBottom: '1.45rem',
          paddingBottom: '0.25rem',
          borderBottom: '0.15rem solid #D6B35A',
        }}
        >        
        <nav 
          style={{ 
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            padding: '1rem 0.2rem 0.2rem 0.2rem',
          }}>
          <div 
            className="logo-container"
            style={{ 
              flex: '1 0 100%',
              maxWidth: '200px',
              marginBottom: '0.5rem',
            }}
          >
            <Link
              to="/"
            >
              <Img 
                fluid={data.placeholderImage.childImageSharp.fluid}
                title={siteTitle}
                alt={siteTitle}
              />
            </Link>
          </div>
          <div
            className='navlink-container'
            style={{
              marginLeft: 'auto',
            }}
          >
          {
            menuLinks.map(link =>
              <li 
                key={link.name} 
                style={{ 
                  listStyleType: 'none',
                  display: 'inline-block',
                }}
              >
                <Link 
                  to={link.link}
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    margin: "0 0.25rem",
                  }}
                >
                  {link.name}
                </Link>
              </li>
            )
          }
          <li
            style={{
              listStyleType: 'none',
              display: 'inline-block',
            }}
          >
            <Link
              to="/rsvp"
              style={{
                color: 'white',
                textDecoration: 'none',
                margin: "0 0.25rem",
                padding: "0.5rem",
                backgroundColor: "#D6B35A",
                borderRadius: "0.5rem",
              }}
            >
              RSVP
            </Link>
          </li>
          </div>
        </nav>
        </header>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: 'Sweet&Szauer',
  menuLinks: [],
}

export default Header
