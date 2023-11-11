import React, { useEffect, useState } from "react";
import "./style.css";
import Card from "../Card";
import { Dna } from "react-loader-spinner";

export default function Home() {
  const [data, setData] = useState();
  const [search, setSearch] = useState();
  const [userInput, setUserInput] = useState();
  const getUrl = "https://restcountries.com/v3.1/all";
  const searchUrl = `https://restcountries.com/v3.1/name/${userInput}`;
  useEffect(() => {
    fetch(getUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);
  const item = data?.map((e, index) => (
    <Card
      key={index}
      image={e.flags.png}
      name={e.name.official}
      capital={e.capital}
    />
  ));
  useEffect(() => {
    fetch(searchUrl)
      .then((res) => res.json())
      .then((search) => {
        setSearch(search);
      })
      .catch((err) => console.log(err));
  }, []);
  const searchCountries = search?.map((e, index) => (
    <Card
      key={index}
      image={e.flags.png}
      name={e.name.official}
      capital={e.capital}
    />
  ));
  return (
    <>
      <h1>All over the world countries</h1>
      <input
        className="search-input"
        type="text"
        placeholder="search here"
        onChange={(e)=>{
          setUserInput(e.target.value)
        }}
      />
      <hr />
      {!search ? (
        <Dna />
      ) : (
        <div className="d-flex flex-wrap justify-content-center">
          {searchCountries}
        </div>
      )}
      <hr />
      {/* {!data ? (
        <Dna />
      ) : (
        <div className="d-flex flex-wrap justify-content-center">{item}</div>
      )} */}
    </>
  );
}
