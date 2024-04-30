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
    // Add more cases for other IDs and icons
    default:
      return null; // Return null for unknown IDs or handle them as needed
  }
}
