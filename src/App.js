import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
    const [countries, setCountries] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then((res) => res.json())
            .then((countries) => setCountries(countries));
        console.log('useEffect');
    }, '');

    const handleWishList = (country) => {
        setWishlist([...wishlist, country]);
        console.log(country.flag);
    };

    // Search Country

    const searchCountry = (searchTerm) => {
        console.log(searchTerm);
        const filteredCountries = countries.filter((country) => {
            return searchTerm.toLowerCase() == country.name.toLowerCase()
                ? true
                : false;
        });
        console.log(filteredCountries);

        setCountries(filteredCountries);
    };

    // Search Country

    return (
        <div className='App'>
            <h2>Rest countries</h2>
            <h4>
                Total Countries List :
                {countries.length === undefined ? 0 : countries.length}
            </h4>
            {/* <h3>Wish list Courtries: {singleCountry.flag}</h3> */}
            <div>
                Wish list Courtries:
                {wishlist.map((couFlag) => (
                    <img src={couFlag.flag} height='25px' width='50px' />
                ))}
            </div>

            {/* // Search Country */}

            <div className='form'>
                <input
                    onKeyPress={function (e) {
                        searchCountry(e.target.value);
                    }}
                    type='search'
                    name=''
                    id=''
                    placeholder='Search Country'
                />
            </div>

            {/* // Search Country */}

            <p>
                {countries.map((country) => (
                    <Country
                        handleWishList={handleWishList}
                        country={country}
                    />
                ))}
            </p>
        </div>
    );
}

export default App;

// useEffect(() => {
//   let didCancel = false;

//   async function fetchMyAPI() {
//     let url = 'http://something/' + productId;
//     let config = {};
//     const response = await myFetch(url);
//     if (!didCancel) { // Ignore if we started fetching something else
//       console.log(response);
//     }
//   }

//   fetchMyAPI();
//   return () => { didCancel = true; }; // Remember if we start fetching something else
// }, [productId]);

// useEffect(() => {
//   let didCancel = false;
//   async function fetchMyAPI() {
//     let url = 'https://restcountries.eu/rest/v2/all';
//     let config = {};
//     const response = await fetch(url);
//     if(!didCancel) {
//       console.log(response)
//     }
//   }
//   fetchMyAPI();
//   return ()=> {didCancel = true; }
// })
