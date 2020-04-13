import React from 'react';

export default function SevereImpact(props) {


    return (
        <div className='severeImpact'>
            <p>
                Currently Infected:  <span className='data'>{props.current} </span>
            </p>

            <p>
                Infections: <span className='data'>{props.infections} </span>
            </p>

            <p>
                Severe Cases: <span className='data'>{props.severe} </span>
            </p>

            <p>
                Hospital Beds: <span className='data'>{props.hospital} </span>
            </p>

            <p>
                Cases For ICU: <span className='data'>{props.icu} </span>
            </p>

            <p>
                Cases For Ventilators: <span className='data'>{props.ventilators} </span>
            </p>

        </div>
    )
}
