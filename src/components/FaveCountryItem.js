const FaveCountryItem = ({country}) => {

    return(
        <li>{country.name.common}! {country.flag}</li>
    )
}


export default FaveCountryItem