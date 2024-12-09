import { useState } from "react";

export default function SearchBar({ setSearchTerm }) {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate year input (4-digit year)
    if (!/^\d{4}$/.test(searchInput)) {
      alert("Please enter a valid 4-digit year.");
      return;
    }

    setSearchTerm(searchInput); // Pass the year to the parent component
    setSearchInput(""); // Reset input
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Year:
        <input
          type="text"
          onChange={handleChange}
          value={searchInput}
          placeholder="e.g., 1990"
          required
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}
