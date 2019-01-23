import React from 'react'
import PropTypes from 'prop-types'

const EmbedediFrame = ({embededUrl, title}) => (
    <iframe 
        style={{
            minHeight: '450px',
        }}
        title={title}
        src={embededUrl}
        width="100%" 
        height="100%" 
        frameBorder="0"
        scroll="no"
        allowFullScreen 
     />
)
EmbedediFrame.propTypes = {
    embededUrl: PropTypes.string,
    title: PropTypes.string,
}

EmbedediFrame.defaultProps = {
    embededUrl: "",
    title: "",
}

export default EmbedediFrame