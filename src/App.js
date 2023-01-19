import React from "react";
import AllCountries from "./components/AllCountries";
import CountryInfo from "./components/CountryInfo";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Routes>
      <Route exact path="/countries-app" element={<AllCountries />} />
      <Route
        path="/countries-app/country/:countryName"
        element={<CountryInfo />}
      />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default App;
