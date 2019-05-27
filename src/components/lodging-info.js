import React from 'react'
import PropTypes from 'prop-types'
import TextBillboard from './text-billboard'

const LodgingInfo = ({ title }) => (
    <TextBillboard>
        <p>In the map above you can set filters to suit your specific needs, and the center is our venue. Hover or select a pin to see more information about it!</p>
        <p>We will be arriving to Hungary on October 01, 2019 and staying until October 14th, 2019. During this time, we will be in Pecs until October 5th afterwhich we will be in Budapest.</p>
        <p>We will be staying at an AirBnB on the Pest side, near the Petofi Hid and Ferenc Krt. area until October 11th. After that, we will be on the Buda side, near the bottom of the Fisherman's bastion hill in an AirBnB.</p>
    </TextBillboard>
)

LodgingInfo.propTypes = {
    title: PropTypes.string,
}

LodgingInfo.defaultProps = {
    title: "",
}

export default LodgingInfo