import React from 'react'
import TextBillboard from './text-billboard'

const Span = ({textColor, children}) => (
    <span
        style={{
            color: '#000',
        }}
    >
        {children}
    </span>
)

const VenueInfo = () => (
    <React.Fragment>
    <section
      className='venue-info-container'
      style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          flex: '0 1 auto',
          paddingLeft: '0.5rem',
          textAlign: 'center',
          color: '#fff',
      }}
    >
        <p><Span>Address:</Span> Budapest, Szentháromság tér, 1014 Hungary</p>
        <p>
            <Span>Phone: </Span> 
            <a 
                href="tel:+3614583030"
                style={{
                    textDecoration: 'underline',
                    color: "#fff",
                }}
            >
                +36 1 458 3030
            </a>
        </p>
        <p><Span>Ceremony:</Span> Margareta Terrace</p>
        <p><Span>Reception:</Span> Archades</p>
    </section>
    <TextBillboard>
        <p>The Fisherman’s Bastion was built between 1895 and 1902 as part of the series of developments that were to celebrate the 1000th birthday of the Hungarian state.</p>
        <p>For more history about the Fishermans Bastion please visit the <a href="http://www.fishermansbastion.com/history">official history website</a>.</p>
    </TextBillboard> 
    </React.Fragment>
)

export default VenueInfo