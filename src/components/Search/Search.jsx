import "./Search.scss";
import { useState, useEffect } from "react";

function Search({ getFilteredEvents, defaultCategory }) {
  const [category, setCategory] = useState(defaultCategory || "");

  useEffect(() => {
    if (defaultCategory) {
      setCategory(defaultCategory);
    }
  }, [defaultCategory]);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      if (category.trim() === "") {
        getFilteredEvents("");
      } else {
        getFilteredEvents(category);
      }
    }, 500);
    return () => clearTimeout(delay);
  }, [category]);

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
