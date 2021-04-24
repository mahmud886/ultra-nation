import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then((res) => res.json())
            .then((countries) => setCountries(countries));
    });

    return (
        <div className='App'>
            <h2>Rest countries</h2>
            <p>
                Countries List:
                {countries.map((country) => (
                    <Country country={country} />
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
