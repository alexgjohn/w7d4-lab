import FaveCountryItem from "./FaveCountryItem"

const FaveCountriesList = ({favouriteCountries}) => {



    const countryList = favouriteCountries.map((country) => {
        return(
            <FaveCountryItem
                country={country}
                key={country.cca3}
            />
        )
    })

    return(
        <div>
            <h2>Your favourite countries:</h2>
            <ul>
                {countryList}
            </ul>
        </div>
    )
}

export default FaveCountriesList