import React from "react";
import "./styles/Country.css";

const Country = ({ country }) => {
  //   console.log(country.name.common, country);
  return (
    <div className="Country">
      <img src={country.flags.png} alt={country.name.common} />
      <div className="Country-Info">
        <h3>{country.name.common}</h3>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>
          Capital: {country.capital ? country.capital[0] : "No Capital Info"}
        </p>
      </div>
    </div>
  );
};

export default Country;
