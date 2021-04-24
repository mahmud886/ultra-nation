import React from 'react';
import './Country.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Country = (props) => {
    const { name, capital, cioc, flag, population, region } = props.country;

    return (
        <div className='flex-container'>
            <div className='courtries-container'>
                <div className='single-item'>
                    <img src={flag} alt='' width='200px' height='100px' />
                    <h1>{name}</h1>
                    <h2>{capital}</h2>
                    <h3>{cioc === '' ? 'Not Found' : cioc}</h3>
                    <p>{population}</p>
                    <p>{region}</p>
                    <button
                        className='btn btn-danger btn-lg'
                        onClick={() => props.handleWishList(props.country)}>
                        Add to
                        <FontAwesomeIcon icon={faHeart} /> list
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Country;
