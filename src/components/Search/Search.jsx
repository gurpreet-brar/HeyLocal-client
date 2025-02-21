import "./Search.scss";
import { useState, useEffect } from "react";

function Search({ getFilteredEvents }) {
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      getFilteredEvents(category);
    }, 500);
    return () => clearTimeout(delay);
  }, [category]);

  category && console.log(category);
  return (
    <div className="search">
      <input
        className="search__bar"
        type="text"
        name="search"
        id="search"
        placeholder="Search by Category"
        value={category}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
