"use client";
import React, { useContext } from "react";
import { AppContext } from "./contextApi/AppProvider";
import {
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp,
  FaCreativeCommonsSamplingPlus,
} from "react-icons/fa";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { IoSpeedometerOutline } from "react-icons/io5";

function Detail() {
  const { data, setData, isData, setIsData, main, setMain } =
    useContext(AppContext);
  if (data) {
    setMain(data.main);
  }
  const mainData = data
    ? data.main
    : { temp_min: 0, temp_max: 0, feels_like: 0 };

  // console.log(data.main.temp_max);
  // console.log("main");
  const tempData = [
    {
      icon: <FaRegArrowAltCircleDown />,
      heading: "Min",
      text: Math.floor(mainData.temp_min ?? 0) + (isData ? " C" : " F"),
    },
    {
      icon: <FaRegArrowAltCircleUp />,
      heading: "Max",
      text: Math.floor(mainData.temp_max ?? 0) + (isData ? " C" : " F"),
    },
    {
      icon: <MdOutlineEmojiEmotions />,
      heading: "Feels_like",
      text: Math.floor(mainData.feels_like ?? 0) + (isData ? " C" : " F"),
    },
    {
      icon: <FaCreativeCommonsSamplingPlus />,
      heading: "Pressure",
      text: (mainData.pressure ?? 0) + " hPa",
    },
    {
      icon: <IoSpeedometerOutline />,
      heading: "Speed",
      text: (data.wind.speed ?? 0) + " m/h",
    },
    {
      icon: <WiHumidity />,
      heading: "Humidity",
      text: (mainData.humidity ?? 0) + " %",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap text-white gap-5 h-2/3 justify-center items-center my-auto ">
        {tempData.map((item, i) => (
          <div className="bg-stone-950 opacity-50 w-1/3 h-1/5 py-2 rounded-md grid place-items-center ">
            <div className="pb-1 font-light flex border-2 items-center justify-between  text-sm ">
              {item.icon}
              <p className="pl-2">{item.heading}</p>
            </div>
            <p className="text-2xl ">{item.text}</p>
          </div>
        ))}
      </div>
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
