import { FiShoppingBag } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import { LuDoorOpen } from "react-icons/lu";
import { PiTelevision } from "react-icons/pi";

const content = [
  {
    id: "",
    name: "Reservation",
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

const roomAttribute = [
  {
    name: "No"
  },
  {
    name: "Picture"
  },
  {
    name: "Floor"
  },
  {
    name: "Room Number"
  },
  {
    name: "Price per Night"
  },
  {
    name: "Availability"
  },
  {
    name: "Size Area"
  },
  {
    name: "Action"
  }
]

const orderAttribute = [
  {
    name: "No"
  },
  {
    name: "Name"
  },
  {
    name: "Contact"
  },
  {
    name: "Room Number"
  },
  {
    name: "Charge"
  },
  {
    name: "Action"
  }
]

export { content, bedAttribute, facilityAttribute, roomAttribute, orderAttribute };
