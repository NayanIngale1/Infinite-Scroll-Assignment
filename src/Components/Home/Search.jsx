import React from "react";
import { BsSearch } from "react-icons/bs";
import "./Home.css";

export default function Search({ query, onChange }) {
  return (
    <div className="search__wrapper">
      <BsSearch />{" "}
      <input
        type="text"
        value={query}
        onChange={onChange}
        className="search__input"
        placeholder="Search for a contact"
      />
    </div>
  );
}
