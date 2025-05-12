import React from 'react'
import CountUp, { useCountUp } from 'react-countup';

const FunFact = [
    {
        title: '280',
        subTitle: 'Total Destination',
        symbol: '+',
    },
    {
        title: '40',
        subTitle: 'Travel Package',
        symbol: '+',
    },
    {
        title: '20',
        subTitle: 'Total Traveler',
        symbol: 'K',
    },
    {
        title: '8',
        subTitle: 'Positive Review',
        symbol: 'K',
    }

]


const TravelFunFact = (props) => {

    useCountUp({
        end: '56656',
        ref: 'counter',
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
    });


    return (

        <div className="xb-counter__wrap mt-30">
            <div className="row">
                {FunFact.map((funfact, fitem) => (
                    <div className="col-lg-3 col-md-6" key={fitem}>
                        <div className="xb-counter2">
                            <div className="xb-item--inner text-center">
                                <h2 className="xb-item--number"><span className="xbo"><CountUp end={funfact.title} enableScrollSpy /></span><span className="suffix">{funfact.symbol}</span></h2>
                                <span>{funfact.subTitle}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <span id="counter" className='d-none' />
        </div>
    )
}

export default TravelFunFact;