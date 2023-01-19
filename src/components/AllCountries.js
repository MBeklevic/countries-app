import React, { useEffect, useState } from "react";
import "./styles/AllCountries.css";
import Country from "./Country";
import Search from "./Search";
import Filter from "./Filter";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";

function AllCountries() {
  const [countries, setCountries] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getCountries = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      if (!res.ok) throw new Error("Something went wrong!!!");
      const data = await res.json();
      setCountries(data);
      // console.log(data);
      setIsLoading(false);
      // console.log("loaded");
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const onRegionFilter = async (region) => {
    if (region) {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/region/${region}`
        );
        if (!res.ok) throw new Error("Something went wrong!!!");
        const data = await res.json();
        setCountries(data);
        // console.log(data);
        setIsLoading(false);
        // console.log("loaded");
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    } else getCountries();
  };
  const filterCountriesByName = (value) => {
    countries[0]
      ? value
        ? setCountries(
            countries.filter((countryname) =>
              countryname.name.common
                .toLowerCase()
                .includes(value.toLowerCase())
            )
          )
        : getCountries()
      : getCountries();
  };
  return (
    <div className="AllCountries">
      <h1>Countries API</h1>
      <div className="AllCountries-Features">
        {countries && <Search onSearch={filterCountriesByName} />}
        {countries && <Filter onFilter={onRegionFilter} />}
      </div>
      <div className="AllCountries-Countries">
        {isLoading && !error && <h4>Loading...</h4>}
        {!isLoading && error && <NotFound />}
        {countries &&
          countries.map((country, idx) => (
            <Link
              key={idx}
              to={`country/${country.name.common}`}
              style={{ textDecoration: "none" }}
            >
              <Country key={idx} country={country} />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default AllCountries;
