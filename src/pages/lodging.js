import React from 'react'

import Layout from '../components/layout'
import EmbedediFrame from '../components/embeded-iframe'
import LodgingInfo from '../components/lodging-info'

const iframeURL = `https://www.stay22.com/events/gm/ChIJnam0fyLcQUcRRl4jRKg8Ji8?lat=40.7505045&lng=-73.9934387&title=Fishermans%20Bastion&adults=2&children=0&infants=0&rooms=1&min=15&max=175&showhotels=true&showairbnbs=true&showothers=false&ljs=en`
const iframeTitle = "Fishermans Bastion Lodging"

const LodgingPage = () => (
  <Layout>
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
        embededUrl= {iframeURL}
      />
    </div>
    <LodgingInfo 
      title="personal-stay"
    />
  </Layout>
)

export default LodgingPage
