"use client";
import React, { useContext } from "react";
import { AppContext } from "./contextApi/AppProvider";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function Detail() {
  const { data, setData, isData, setIsData } = useContext(AppContext);
  // const { main } = data;
  // console.log(data.main.temp_max);
  console.log("main");
  return (
    <>
      {!data ? (
        <div className="bg-stone-950 opacity-70 w-3/4 p-5 rounded-md grid place-items-center">
          <p>No Data found</p>
        </div>
      ) : (
        <div className="flex flex-wrap text-white gap-5 justify-center items-center ">
          <div className="bg-stone-950 opacity-40 w-1/3 p-5 rounded-md grid place-items-center">
            {" "}
            <div className="pb-1 ">
              <FaArrowDown />
              <p>Min</p>
            </div>
            <p className="text-xl">
              {Math.floor(data.main.temp_min)} {isData ? "C" : "F"}
            </p>
          </div>
          <div className="bg-stone-950 opacity-70 w-1/3 p-5 rounded-md grid place-items-center">
            <div className="pb-1 ">
              <FaArrowUp />
              <p>Max</p>
            </div>
            <p>
              {" "}
              {Math.floor(data.main.temp_max)}
              {isData ? "C" : "F"}
            </p>
          </div>
          <div className="bg-stone-950 opacity-70 w-5/12 p-5 rounded-md grid place-items-center">
            {data.main.pressure}mb
          </div>
          <div className="bg-stone-950 opacity-70 w-5/12 p-5 rounded-md grid place-items-center">
            {data.wind.speed}km/h
          </div>
          <div className="bg-stone-950 opacity-70 w-5/12 p-5 rounded-md grid place-items-center">
            {data.main.humidity}%
          </div>
          <div className="bg-stone-950 opacity-70 w-5/12 p-5 rounded-md grid place-items-center">
            <p className="text-xl">Tempreture feel</p>
            {data.main.feels_like}
            {isData ? "C" : "F"}
          </div>
        </div>
      )}
    </>
  );
}

export default Detail;
{
  /* <div className="flex flex-wrap text-white gap-5 justify-center items-center ">
      <div className="bg-stone-950 opacity-40 w-5/12 p-5 rounded-md grid place-items-center"></div>
      <div className="bg-stone-950 opacity-70 w-5/12 p-5 rounded-md grid place-items-center">
        {data.main.temp_max}
      </div>
      <div className="bg-stone-950 opacity-70 w-5/12 p-5 rounded-md grid place-items-center">
        {data.main.temp_min}
      </div>
      <div className="bg-stone-950 opacity-70 w-5/12 p-5 rounded-md grid place-items-center">
        F
      </div>
      <div className="bg-stone-950 opacity-70 w-5/12 p-5 rounded-md grid place-items-center">
        F
      </div>
      <div className="bg-stone-950 opacity-70 w-5/12 p-5 rounded-md grid place-items-center">
        F
      </div>
    </div> */
}
