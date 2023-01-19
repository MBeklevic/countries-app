import React from "react";
import "./styles/Filter.css";

const Filter = ({ onFilter }) => {
  const selectHandler = (e) => {
    const region = e.target.value;
    onFilter(region);
  };
  return (
    <div className="Filter">
      <select onChange={selectHandler}>
        <option value={""}>WORLD</option>
        <option value={"Africa"}>Africa</option>
        <option value={"Americas"}>Americas</option>
        <option value={"Asia"}>Asia</option>
        <option value={"Europe"}>Europe</option>
        <option value={"Oceania"}>Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
