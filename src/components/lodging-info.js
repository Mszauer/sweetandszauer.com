import React from 'react'
import PropTypes from 'prop-types'
import TextBillboard from './text-billboard'

const LodgingInfo = ({title}) => (
    <TextBillboard>
        <p>In the map above you can set filters to suit your specific needs, and the center is our venue. Hover or select a pin to see more information about it!</p>
        <p>We will be updating this section to include where we will be personally staying</p>
    </TextBillboard>
)

LodgingInfo.propTypes = {
    title: PropTypes.string,
}

LodgingInfo.defaultProps = {
    title: "",
}

export default LodgingInfo