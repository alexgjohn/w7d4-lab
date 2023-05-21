// import './CountryDetail.css';

const CountryDetail = ({selectedCountry, countries, addFavouriteCountry}) => {

    const handleClick = (event) => {
        event.preventDefault()
        console.log("Button was clicked")
        addFavouriteCountry(selectedCountry)
    }


    const countriesWithBorderCountries = countries.filter((country) => {
        return country.hasOwnProperty('borders')
    })

    const selectedCountryHasBorderCountries = function () {
        return countriesWithBorderCountries.includes(selectedCountry) 

    }
        
    
    let borderCountryNames

    if (selectedCountryHasBorderCountries()) {
        const borderCountries = countriesWithBorderCountries.filter((country) => {
            return selectedCountry.borders.includes(country.cca3)
        })
        borderCountryNames = borderCountries.map((country, index) => {
            return(
                <li key={index}>{country.name.common}</li>
            )
        })
    }
    else {
        return(
            <div className="country-detail">
                <p>The capital of {selectedCountry.name.common} is {selectedCountry.capital}.</p>
                <p>The total population of {selectedCountry.name.common} is {selectedCountry.population}.</p>
                <p>It shares no borders.</p>
                <button onClick={handleClick}>Add to favourites</button>
            
            </div>
        )
    }
    



    return (
        <div className="country-detail">
            <p>The capital of {selectedCountry.name.common} is {selectedCountry.capital}.</p>
            <p>The total population of {selectedCountry.name.common} is {selectedCountry.population}.</p>
            It shares a border with:
            <ul>{borderCountryNames}</ul>
            <button onClick={handleClick}>Add to favourites</button>
            
        </div>
    )
}

export default CountryDetail;