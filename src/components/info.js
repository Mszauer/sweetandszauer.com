import React from 'react'
import InfoCard from './info-card'

const Info = () => (
    <React.Fragment>
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                flex: '0 1 auto',
                paddingLeft: '0.5rem',
                textAlign: 'center',
            }}
        >
            <InfoCard
                title='Ceremony'
            >
                <p>
                    The ceremony will start at 4:00pm. It will be outside on the Margareta Terrace, right above our reception area.<br />
                    At the reception there will be food, drinks, and some dancing until midnight.
                </p>
            </InfoCard>
            <InfoCard
                title='Passport'
            >
                <p>
                    You will need a passport to travel internationally, and it takes 6-8weeks for processing time. <br />
                    <a href="https://travel.state.gov/content/travel/en/passports/apply-renew-passport/how-to-apply.html">Government Issued Passport Information</a> shows what documents you need, and the steps needed to apply.
                U.S. citizens may enter Hungary for up to 90 days for tourist or business purposes without a visa. <br />
                    Your U.S. passport should be valid for at least three months beyond the period of stay. <br />
                    Visit the <a href="https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Hungary.html">Government Travel Information Website</a> for information about travel to Hungary.
            </p>
            </InfoCard>
            <InfoCard
                title='Flights'
            >
                You will arrive at the <a
                    href='https://www.budapest-airport.com/'
                    style={{
                        color: '#000',
                        textDecoration: 'underline',
                    }}
                >
                    Budapest Airport - Ferenc Liszt Airport (BUD)
            </a>
                <p>
                    The best time range to buy international tickets is 5-3months out.<br />
                    Here are some websites that you can search for flights on (use incognito mode for best results): <br />
                    <a href="https://www.expedia.com/Flights">Expedia</a> <br />
                    <a href="https://www.orbitz.com/Flights">Orbitz</a> <br />
                    <a href="https://www.skyscanner.com/">Skyscanner</a> <br />
                    <a href="https://www.travelocity.com/Flights">Travelocity</a> <br />
                </p>
            </InfoCard>
        </div>
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                flex: '0 1 auto',
                paddingLeft: '0.5rem',
                textAlign: 'center',
            }}
        >
            <InfoCard
                title='Currency'
            >
                {/* https://ratesapi.io/api/latest?base=USD&symbols=EUR,HUF */}
                <p>
                    Hungary only accepts HUF and Euros so you will need to convert some spare cash before coming.<br />
                    We would highly recommend bringing some cash, most places do accept card but we will visit some places that only take cash.<br />
                    We also strongly recommended to inform your bank before you travel so your card won't get locked.<br />
                    If you want to check the current conversion rates, just google <a href="https://www.google.com/search?source=hp&ei=6uREXMuLC6zv5gLtwIHIBw&q=usd+to+euro&btnK=Google+Search&oq=usd+to+euro&gs_l=psy-ab.3..0i10j0l9.1691.2521..2741...0.0..0.107.841.11j1......0....1..gws-wiz.....0..0i131.tM1WwiAo0nY">USD to EUR</a> or <a href="https://www.google.com/search?ei=7eREXK3qOcrr5gK3_7vQBQ&q=usd+to+ft&oq=usd+to+ft&gs_l=psy-ab.3..0l3j0i22i30l7.34962.35247..35542...0.0..0.77.144.2......0....1..gws-wiz.......0i71.XUgke9D0UHQ">USD to FT</a>
                </p>
            </InfoCard>
            <InfoCard
                title='RSVP Info'
            >
                <p>
                    We understand that some people may not know their schedule so far out in advance, but please RSVP ASAP. <br />
                    If you have any questions, or to voice any concerns, please feel free to contact us at <br />
                    <a href="mailto:mszauer@mail.usf.edu">mszauer@mail.usf.edu</a> or <a href="mailto:donahueh@mail.usf.edu">donahueh@mail.usf.edu</a>
                </p>
            </InfoCard>
            <InfoCard
                title='Weather'
            >
                <p>Highs: 61&#8457; / 16&#8451;</p>
                <p>Lows: 42&#8457; / 5&#8451;</p>
                <p>
                    We really recommend to bring heavy jackets and winter clothing. <br />
                </p>
            </InfoCard>
        </div>
    </React.Fragment>
)

export default Info