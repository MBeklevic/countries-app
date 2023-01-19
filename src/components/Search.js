import { useState } from "react";
import "./styles/Search.css";

const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(input);
    setInput("");
  };
  return (
    <>
      <div className="Search">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Search a country..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>
    </>
  );
};

export default Search;
