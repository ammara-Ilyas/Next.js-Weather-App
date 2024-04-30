"use client";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./contextApi/AppProvider";
function TakingInput() {
  const [search, setSearch] = useState("multan");
  const apiKey = "e13a0a16f1e2dd21f352459de3a55a24";
  const { data, setData, isData, setIsData } = useContext(AppContext);
  useEffect(() => {
    const fetchWeatherData = async (city) => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey} `;
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
  }, [search]);
  console.log(data);

  return (
    <div className="text-white flex flex-col items-center justify-center">
      {!data ? (
        <p>No data found</p>
      ) : (
        <>
          <div className=" flex-col py-5 sm:flex-row rounded-md flex justify-between gap-3 lg:justify-between lg:gap-0  items-center  px-10">
            <input
              type="text"
              placeholder="Enter City"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className=" border-white bg-transparent text-white rounded-md s py-1 px-2  border-2 outline-none placeholder:text-white"
            />{" "}
            <button className="border-2">Search</button>
            <button className="text-3xl text-black border-none oultine-none bg-white  px-10 rounded-md">
              {isData ? "C" : "F"}
            </button>
          </div>
          <p className="text-4xl font-bold mt-7">
            {data.name} <span>{data.sys.country}</span>
          </p>
        </>
      )}
    </div>
  );
}

export default TakingInput;
