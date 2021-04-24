import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, capital, cioc, flag, population, region } = props.country;

    return (
        <div className='courtries-container'>
            <div>
                <img src={flag} alt='' width='200px' height='100px' />
                <h1>{name}</h1>
                <h2>{capital}</h2>
                <h3>{cioc === '' ? 'Not Found' : cioc}</h3>
                <p>{population}</p>
                <p>{region}</p>
            </div>
        </div>
    );
};

export default Country;
