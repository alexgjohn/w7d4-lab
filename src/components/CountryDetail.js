// import './CountryDetail.css';

const CountryDetail = ({country}) => {

    return (
        <div className="country-detail">
            <p>The capital of {country.name.common} is {country.capital}.</p>
            <p>The total population of {country.name.common} is {country.population}.</p>
        </div>
    )
}

export default CountryDetail;