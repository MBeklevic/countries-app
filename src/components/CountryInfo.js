import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import "./styles/CountryInfo.css";

const CountryInfo = () => {
  const [country, setCountry] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { countryName } = useParams();

  const getCountryByName = async () => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      if (!res.ok) throw new Error("Could not Found");
      const data = await res.json();
      setCountry(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };
  // console.log(country);
  useEffect(() => {
    getCountryByName();
  }, [countryName]);

  return (
    <>
      {isLoading && !error && <h4>Loading...</h4>}
      {!isLoading && error && <NotFound />}
      {country && (
        <div className="CountryInfo">
          <h1>{country && country[0].name.common}</h1>
          <button className="CountryInfo-button">
            <Link style={{ textDecoration: "none" }} to={"/countries-app"}>
              BACK
            </Link>
          </button>
          {country && (
            <div className="CountryInfo-container">
              <img src={country[0].flags.png} alt={country[0].name.common} />
              <div className="CountryInfo-info">
                <h2>{country[0].name.common}</h2>
                <h3>Capital: {country[0].capital && country[0].capital[0]} </h3>
                <h4>{country[0].subregion}</h4>
                <h4>Population: {country[0].population}</h4>
                <h4>Area: {country[0].area}</h4>
                <h4>Borders:</h4>
                {country[0].borders &&
                  country[0].borders.map((border, idx) => (
                    <p key={idx}>{border}</p>
                  ))}
                <h4>Languages: </h4>
                {Object.values(country[0].languages).map((lang, idx) => (
                  <p key={idx}>{lang}</p>
                ))}

                <a
                  style={{ textDecoration: "none" }}
                  href={country[0].maps.googleMaps}
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Maps
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CountryInfo;
