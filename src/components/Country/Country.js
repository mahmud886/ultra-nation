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
                    <img src={flag} alt='' width='150px' height='75px' />
                    <h2>{name}</h2>
                    <h3>{capital === '' ? 'Not Found' : capital}</h3>
                    <h4>{cioc === '' ? 'Not Found' : cioc}</h4>
                    <p>{population === '' ? 'Not Found' : population}</p>
                    <p>{region === '' ? 'Not Found' : region}</p>
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
