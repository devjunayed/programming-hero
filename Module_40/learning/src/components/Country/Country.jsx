import { useState } from 'react';
import './Country.css';
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3>Name: {name["common"]}</h3>
            <img src={flags.png} alt="" height="150px" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={()=> handleVisitedFlags(country.flags.png)}>Add Visited Flags</button>
            <br />
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            <br />
            <br />
            <button onClick={()=> handleVisitedCountry(country)}>Mark Visited</button>
            <p> {visited ? 'I have visited this country' : 'I want to visit this country'}
            </p>

            <hr />
            <CountryDetail
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            >
            </CountryDetail>
        </div>
    );
};

export default Country;