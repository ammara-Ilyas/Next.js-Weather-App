"use client";
import React, { useContext } from "react";
import Image from "next/image";
import bg from "@/images/bg.jpeg";
import { AppContext } from "./contextApi/AppProvider";
function Weather() {
  const { data, isData } = useContext(AppContext);
  // const des=data.weather[0].description.
  return (
    <div
      className="
     text-white    flex flex-col justify-between items-center"
    >
      {!data ? (
        <p className="text-2xl">Data not found</p>
      ) : (
        <>
          <div className="flex   gap-5 items-center justify-between  px-20 w-full py-5  text-xl">
            <Image src={bg} alt="logo" height={60} width={60} />
            <div className="text-3xl font-light ">
              <p>
                {data.main.temp} {isData ? "C" : "F"}
              </p>
            </div>

            {/* <p>
              Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
            </p>

            <p>{data.name}</p>
            <div>{data && data.weather && data.weather[0].icon}</div>
            <p>{data.weather[0].main}</p>
          </div>
          <div className="text-4xl font-bold">
            <p>
              {data.main.temp} {isData ? "C" : "F"}
            </p> */}
          </div>
          <div className="text-3xl">
            <p className="tracking-wider	">
              {" "}
              {new Date(data.dt * 1000).toLocaleString()}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center my-2 pt-3 w-full gap-6">
            <div className="bg-blue-700 w-1/3 rounded-md px-4">
              <p>Sunrise</p>
              <p>{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
            </div>
            <div className="bg-blue-700 w-1/3 rounded-md px-4">
              <p>Sunset</p>
              <p> {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
            </div>
          </div>

          <hr className="text-white" />
          <div className="flex flex-wrap text-black items-center justify-center my-3 pt-3 w-full gap-6">
            <div className="bg-white  w-1/3 rounded-md px-4">
              <p>Longitude</p>
              <p>{data.coord.lon.toFixed(2)}</p>
            </div>
            <div className="bg-white w-1/3 rounded-md px-4">
              <p>Latitude</p>
              <p> {data.coord.lat.toFixed(2)}</p>
            </div>
          </div>
          <div className="font-light p-2 px-4 border-b w-8/12">
            {data.weather[0].main}
          </div>
        </>
      )}
    </div>
  );
}

export default Weather;
