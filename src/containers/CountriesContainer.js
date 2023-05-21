import React, { useState, useEffect } from 'react';
import './CountriesContainer.css';
import CountryDetail from '../components/CountryDetail';
import CountrySelect from '../components/CountrySelect';
import FaveCountriesList from '../components/FaveCountriesList';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favouriteCountries, setFavouriteCountries] = useState([])

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    const onCountrySelected = function(index) {
        const country = countries[index]
        setSelectedCountry(country)

    }

    const addFavouriteCountry = (newCountry) => {
        if (!favouriteCountries.includes(newCountry)) {

            console.log(`${newCountry.name.common} was added to favourites.`)

            const updatedFavourites = [...favouriteCountries, newCountry]
            
            setFavouriteCountries(updatedFavourites)
        }
        
        
    }

    return (
        <div className="main-container">
            <CountrySelect countries={countries} onCountrySelected={onCountrySelected}/>
            {selectedCountry ? <CountryDetail selectedCountry={selectedCountry} countries={countries} addFavouriteCountry={addFavouriteCountry}/> : null}
            <section id="favourites">
                <FaveCountriesList favouriteCountries={favouriteCountries}/>
            </section>
        </div>
    )
}

export default CountryContainer;
