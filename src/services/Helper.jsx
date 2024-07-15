const tdStyle = "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800";
const thStyle =
  "px-6 py-3 text-center text-medium font-medium text-white uppercase";

const activeLink =
  "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white font-semibold text-md bg-indigo-600";
const nonActiveLink =
  "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md hover:bg-light-gray";

const countTotalCharge = (checkIn, checkOut) => {
  const checkInTimestamp = new Date(checkIn).getTime() / 1000;
  const checkOutTimestamp = new Date(checkOut).getTime() / 1000;

  const secondPerDay = 24 * 60 * 60;
  const stayDuration = checkOutTimestamp - checkInTimestamp;
  const numberOfDays = Math.ceil(stayDuration / secondPerDay);

  return numberOfDays;
};

const findRoomNumber = (id, roomData) => {
  const room = roomData.find((item) => item.id === id);
  return room.roomnumber;
};

const convertUnixToDateTime = (time) => {
  const dateTime = new Date(parseInt(time) * 1000)
  return dateTime.toLocaleString();
}

export { tdStyle, thStyle, activeLink, nonActiveLink, countTotalCharge, findRoomNumber, convertUnixToDateTime };
