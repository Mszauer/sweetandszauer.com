import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import TextBillboard from './text-billboard'

const Hero = () => (
    <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "hero.png" }) {
          childImageSharp {
            fluid(maxWidth: 680, maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
        <React.Fragment>
            <section
                className="container"
                style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                }}
            >
                <Img 
                    fluid={data.placeholderImage.childImageSharp.fluid} 
                />
            </section> 
            <TextBillboard>
                <p>We would be honored for you to join us on October 12, 2019 at Fisherman's Bastion in Budapest.</p>
                <p>Please explore the website to learn more about our wedding and the location, if you have any
                    questions please contact us!
                </p>
            </TextBillboard>
        </React.Fragment>
    )}
  />
)

export default Hero