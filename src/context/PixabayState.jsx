import React, { useEffect, useState } from "react";
import PixabayContext from "./PixabayContext";

const PixabayState = (props) => {
  const [imageData, setImageData] = useState([]);
  const [query, setQuery] = useState("london");
  const api_key = "50423030-2b9d4b90d4e6d22e736af52fd";
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&per_page=100`
      );
      const data = await api.json();
      setImageData(data.hits);
      console.log(data);
    };
    fetchData();
  }, [query]);

  const fetchImageByCategory = async (cat) => {
    const api = await fetch(
      `https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&per_page=100`
    );
    const data = await api.json();
    setImageData(data.hits);
    console.log(data);
  };

  return (
    <PixabayContext.Provider
      value={{ imageData, fetchImageByCategory, setQuery }}
    >
      {props.children}
    </PixabayContext.Provider>
  );
};

export default PixabayState;
