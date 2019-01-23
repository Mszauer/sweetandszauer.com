import React from 'react'

const TextBillboard = ({children}) => (
    <section
        style={{
            background: 'rgba(0,0,0,0.6)',
            borderRadius: '5px',
            color: '#fff',
            padding: '1rem',
            textAlign: 'center',

        }}
    >
        {children}
    </section> 
)

export default TextBillboard