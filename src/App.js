// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
    const [originalCountries, setOriginalCountries] = useState([])
    const [countries, setCountries] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then((res) => res.json())
        .then((countries) => {
            setOriginalCountries(countries)
            setCountries(countries);
        },
        console.log('useEffect'));
    }, []);

    const handleWishList = (country) => {
        setWishlist([...wishlist, country]);
        console.log(country.flag);
    };

    // Search Country
    const searchCountry = (searchTerm) => {
        console.log(searchTerm);
        const filteredCountries = originalCountries.filter((country) => {
            return country.name.toLowerCase().includes(searchTerm.toLowerCase())
        });
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
            <div>
                Wish list Countries:
                {wishlist.map((couFlag) => (
                    <img src={couFlag.flag} alt='country_image' height='25px' width='50px' />
                ))}
            </div>

            {/* // Search Country */}
            <div className='form'>
                <h5>Search Country </h5>
                <input
                    onKeyUp={function (e) { searchCountry(e.target.value); }}
                    type='search'
                    name=''
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
