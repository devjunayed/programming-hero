import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
    // const {country, handleVisitedCountry, handleVisitedFlgas} = props;


    return (
        <div>
            <h4>Country Details</h4>
            {/* <CountryData
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlgas={handleVisitedFlgas}
            >
            </CountryData> */}

            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetail;