import React from 'react'

import Layout from '../components/layout'
import VenueInfo from '../components/venue-info'
import EmbedediFrame from '../components/embeded-iframe'

const iframeTitle = "Fishermans Bastion"

const VenuePage = () => (
  <Layout>
    <div
      className='flex-container'
      style={{
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
    <div
      className='iframe-container'
      style={{
        flex: '1 1 auto',
        marginBottom: '1rem',
        padding: '0 0.5rem',
      }}
    >
      <EmbedediFrame 
        title={iframeTitle}
        embededUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.370125263405!2d19.032592515626877!3d47.50218267917791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc227fb4a99d%3A0x2f263ca844235e46!2sFisherman&#39;s+Bastion!5e0!3m2!1sen!2sus!4v1548025941133"
      />
    </div>
    <VenueInfo />
    </div>
  </Layout>
)

export default VenuePage
