import React from 'react'
import PropTypes from 'prop-types'
import TextBillboard from './text-billboard'

const EventsList = ({eventsList}) => (
    <TextBillboard>
        <p>We are currently planning on doing some events before the wedding, but nothing has been finalized yet. Check back soon for more information!</p>
    </TextBillboard> 
)

EventsList.propTypes = {
    eventsList: PropTypes.object,
}

EventsList.defaultProps = {
    eventsList: {},
}

export default EventsList