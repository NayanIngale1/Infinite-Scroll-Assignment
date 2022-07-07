import { useState, useEffect } from "react";
import axios from "axios";

export default function useContactSearch(query, pageNumber) {
 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [isMore, setIsMore] = useState(false);

  useEffect(() => {
    setContacts([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let timeoutId;
    timeoutId = setTimeout(() => {
      axios(
        `https://rickandmortyapi.com/api/character/?name=${query}&page=${pageNumber}`
      )
        .then((res) => {
        //   console.log('res:', res)
          setContacts(prev=>[...prev,...res.data.results]);
          if (res.data.info.next){
            setIsMore(true);
          } else {
            setIsMore(false);
          }
          setLoading(false);
        })
        .catch((err) => {
          console.log(err?.message);
          setError(err?.response?.data.error);
            setLoading(false);
        });
    }, 800);

    return () => clearTimeout(timeoutId);
  }, [query, pageNumber]);

  return { loading, error, contacts, isMore };
}
