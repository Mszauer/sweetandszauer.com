import React from 'react'

import Layout from '../components/layout'
import EmbedediFrame from '../components/embeded-iframe'

const iframeURL = `https://docs.google.com/forms/d/e/1FAIpQLSeVOUevvcpaNGy7i6fhJHEnuu8r_k1cHaSZsdugxy9kFlz4KQ/viewform?embedded=true" width="640" height="1135" frameborder="0" marginheight="0" marginwidth="0"`
const iframeTitle = "RSVP Form"

const RsvpPage = () => (
  <Layout>
    <section
      className='iframe-container'
      style={{
        flex: '1 1 auto',
        marginBottom: '1rem',
        padding: '0 0.5rem',
        height: '1075px',
      }}
    >
      <EmbedediFrame 
        title={iframeTitle}
        embededUrl= {iframeURL}
      />
    </section>
  </Layout>
)
export default RsvpPage
