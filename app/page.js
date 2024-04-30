import Image from "next/image";
import bgCold from "@/images/hot.jpeg";
import TakingInput from "@/components/TakingInput";
import Weather from "@/components/Weather";
import Detail from "@/components/Detail";
export default function Home() {
  return (
    <div
      className=" mx-auto  h-screen  flex px-24 py-6   justify-between"
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
  );
}
