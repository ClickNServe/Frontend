import { FiShoppingBag } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import { LuDoorOpen } from "react-icons/lu";
import { PiTelevision } from "react-icons/pi";

const content = [
  {
    id: "",
    name: "orders",
    icon: <FiShoppingBag />,
  },
  {
    id: "rooms",
    name: "rooms",
    icon: <LuDoorOpen />,
  },
  {
    id: "facilities",
    name: "facilities",
    icon: <PiTelevision />,
  },
  {
    id: "beds",
    name: "beds",
    icon: <IoBedOutline />,
  },
];

const bedAttribute = [
  {
    name: "No",
  },
  {
    name: "Bed Type",
  },
  {
    name: "Price",
  },
  {
    name: "Action",
  },
];

const facilityAttribute = [
  {
    name: "No",
  },
  {
    name: "Facility Name",
  },
  {
    name: "Price",
  },
  {
    name: "Action",
  },
];

export { content, bedAttribute, facilityAttribute };
