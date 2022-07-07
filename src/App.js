import React, { useState, useRef, useCallback } from "react";
import "./App.css";
import Search from "./Components/Home/Search";
import UserCard from "./Components/Home/UserCard";
import useContactSearch from "./utils/useContactSearch";

function App() {
  
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const { loading, error, contacts, isMore } = useContactSearch(
    query,
    pageNumber
  );

  const observer = useRef();
  const lastUserRef = useCallback(
    (node) => {
      if (loading) {
        return;
      }
      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && isMore) {
          setPageNumber((prev) => prev + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, isMore]
  );

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };

  return (
    <div className="App">
      <h1 className="main__heading">Rick And Morty Search</h1>
      <Search query={query} onChange={(e) => handleSearch(e)} />
      <div className="main__listing__wrapper">
        {contacts.map((data, idx) => {
          if (contacts.length == idx + 1) {
            return (
              <div ref={lastUserRef}>
                <UserCard data={data} key={data.id} />
              </div>
            );
          } else {
            return (
              <div>
                <UserCard data={data} key={data.id} />
              </div>
            );
          }
        })}
        {loading && <div className="loading">Loading...</div>}
        {error && <div className="error"> {error}</div>}
      </div>
    </div>
  );
}

export default App;
