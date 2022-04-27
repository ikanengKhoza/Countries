import React, { useState, useEffect } from "react";

const Countries = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  return (
    <div>
      {country.map((element) => {
        return (
          <>
            <span>{element.flag} </span>
            <h3 key={element.id}>{element.name.common}</h3>
          </>
        );
      })}
    </div>
  );
};

export default Countries;
