import axios from "axios";

import { useEffect, useState } from "react";

const customDataFetch = (urlPath, queryParams) => {
  const [myData, setMyData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setloading] = useState(false);
  if (!queryParams) queryParams = "game";
  const options = {
    method: "GET",
    url: "https://imdb-api12.p.rapidapi.com" + urlPath,
    params: {
      query: queryParams,
    },
    headers: {
      "x-rapidapi-key": "7e4c0068b9mshc73f1890961261bp1077d6jsn1a9a9eb4c9dc",
      "x-rapidapi-host": "imdb-api12.p.rapidapi.com",
    },
  };
  useEffect(() => {
    (async () => {
      try {
        setloading(true);
        setError(false);
        const response = await axios.request(options);
        //console.log(response.data.results);
        setMyData(response.data.results);
        setloading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setloading(false);
      }
    })();
  }, []);
  return [myData, error, loading];
};
const movieData = (urlPath, id) => {
  //    console.log("hello");
  const [myData, setMyData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setloading] = useState(false);
  const options = {
    method: "GET",
    url: `https://imdb-api12.p.rapidapi.com${urlPath}${id}`,
    headers: {
      "x-rapidapi-key": "722c88aee8msh27e39558afaf886p1bc4f8jsn8f657bb6fbc0",
      "x-rapidapi-host": "imdb-api12.p.rapidapi.com",
    },
  };
  //console.log("hello");
  const fetchData = async () => {
    try {
      setloading(true);
      setError(false);
      const response = await axios.request(options);
      setMyData(response.data);
      setloading(false);
    } catch (error) {
      console.log(error.message);
      setError(true);
      setloading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return [myData, error];
};

export default { customDataFetch, movieData };
// export default customDataFetch;
