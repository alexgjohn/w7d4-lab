import ListItem from "./ListItem";

const CountrySelect = ({countries, onCountrySelected}) => {

    const countryItems = countries.map((country, index) => {
        return (
        <ListItem 
            country={country} 
            key={index} 
            index={index}

        />
        )
    })

    const handleChange = (event) => {
        onCountrySelected(event.target.value)
    }

    return (
        <>
            {/* <label htmlFor="country-dropdown">Choose a country!</label> */}
            <select onChange={handleChange}>
                {countryItems}
            </select>
            
        </>
    )
}

export default CountrySelect