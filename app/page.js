import Image from "next/image";
import bgCold from "@/images/hot.jpeg";
import TakingInput from "@/components/TakingInput";
import Weather from "@/components/Weather";
import Detail from "@/components/Detail";
export default function Home() {
  return (
    <div className=" h-screen bg-blue-100 border-blue-900 rounded-md overflow-hidden ">
      <div
        className=" mx-auto border-2 h-screen  flex px-20 py-6 m-2  justify-between"
        style={{
          backgroundImage: `url(${bgCold.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div class=" ">
          <div
            className="
 bg-stone-900 opacity-70 p-16 rounded-md
 
          "
          >
            <TakingInput />
            <Weather />
          </div>
        </div>
        <Detail />
      </div>
    </div>
  );
}
