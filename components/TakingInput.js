"use client";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./contextApi/AppProvider";
function TakingInput() {
  const [search, setSearch] = useState("lahore");
  const [unit, setUnit] = useState("metric");

  const apiKey = "e13a0a16f1e2dd21f352459de3a55a24";
  const { data, setData, isData, setIsData } = useContext(AppContext);
  useEffect(() => {
    const fetchWeatherData = async (city) => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit} `;
      try {
        const res = await fetch(url);
        const fetchData = await res.json();
        // console.log(fetchData);
        setData(fetchData);
        setIsData(true);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeatherData(search);
  }, [search, unit]);
  console.log(data);
  const countryCode = data ? data.sys.country : "null";
  const countryName = data ? data.name : "null";
  const handleUnit = () => {
    console.log("unit", unit);
    setUnit(unit === "imperial" ? "metric" : "imperial");
    setIsData((preData) => !preData);
  };
  return (
    <div className="text-white flex flex-col items-center justify-center">
      <div className=" flex-col py-5 sm:flex-row rounded-md flex justify-between gap-3 lg:justify-between lg:gap-0  items-center  px-10">
        <input
          type="text"
          placeholder="Enter City"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" border-white bg-transparent text-white rounded-md s py-1 px-2  border-2 outline-none placeholder:text-white"
        />{" "}
        <button
          className="text-3xl text-black border-none oultine-none bg-white  px-10 rounded-md"
          onClick={handleUnit}
        >
          {isData ? "C" : "F"}
        </button>
      </div>
      {/* {!data ? (
        <p className="p-7 text-xl">No data found</p>
      ) : ( */}
      <p className="text-4xl font-bold mt-7">
        {countryName} <span>{countryCode}</span>
      </p>
      {/* )} */}
    </div>
  );
}

export default TakingInput;
