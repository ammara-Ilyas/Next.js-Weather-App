import { WiHumidity, WiCloudy } from "react-icons/wi";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

export function getIconById(id) {
  switch (id) {
    case "humidity":
      return <WiHumidity />;
    case "cloudy":
      return <WiCloudy />;
    case "sunny":
      return <IoSunnyOutline />;
    case "moon":
      return <IoMoonOutline />;
    default:
      return null;
  }
}
