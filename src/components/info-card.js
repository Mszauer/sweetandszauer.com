import React from 'react';

const InfoCard = ({ title, children }) => (
    <div
        className='info-card'
        style={{
            border: '1px solid #000',
            margin: '0 auto 1rem auto',
            borderRadius: '5px',
            minWidth: '250px',
            maxWidth: '450px',
            minHeight:' 300px',
            backgroundColor: '#fff',
            boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        }}
    >
        <div
            style={{
                height: '100%',
                background: 'rgb(20, 83, 20)',
                borderBottom: '0.1rem solid rgb(214, 179, 90)',

            }}
        >
            <h2 style={{marginTop: '0', paddingTop: '2rem', color: '#fff'}}>{title}</h2>
        </div>
        <hr />
        <div
            style={{
                padding: '0 0.5rem',
            }}
        >
            {children}
        </div>
    </div>
)

export default InfoCard