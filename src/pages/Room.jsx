import React, { useEffect, useState } from "react";
import ButtonCreate from "../components/small/ButtonCreate";
import RoomTable from "../components/table/RoomTable";
import SearchBar from "../components/small/SearchBar";
import { faker } from "@faker-js/faker";
import DeleteModal from "../components/modal/DeleteModal";

const datas = [
  {
    picture: faker.image.avatar(),
    roomNumber: 101,
    floor: 1,
    pricePerNight: 150.0,
    availability: true,
    sizeArea: 100,
  },
  {
    picture: faker.image.avatar(),
    roomNumber: 202,
    floor: 2,
    pricePerNight: 200.0,
    availability: false,
    sizeArea: 120,
  },
  {
    picture: faker.image.avatar(),
    roomNumber: 303,
    floor: 3,
    pricePerNight: 250.0,
    availability: true,
    sizeArea: 80,
  },
  {
    picture: faker.image.avatar(),
    roomNumber: 404,
    floor: 4,
    pricePerNight: 300.0,
    availability: false,
    sizeArea: 150,
  },
  {
    picture: faker.image.avatar(),
    roomNumber: 505,
    floor: 5,
    pricePerNight: 350.0,
    availability: true,
    sizeArea: 200,
  },
  {
    picture: faker.image.avatar(),
    roomNumber: 606,
    floor: 6,
    pricePerNight: 400.0,
    availability: false,
    sizeArea: 75,
  },
  {
    picture: faker.image.avatar(),
    roomNumber: 707,
    floor: 7,
    pricePerNight: 450.0,
    availability: true,
    sizeArea: 90,
  },
  {
    picture: faker.image.avatar(),
    roomNumber: 808,
    floor: 8,
    pricePerNight: 500.0,
    availability: false,
    sizeArea: 110,
  },
  {
    picture: faker.image.avatar(),
    roomNumber: 909,
    floor: 9,
    pricePerNight: 550.0,
    availability: true,
    sizeArea: 130,
  },
  {
    picture: faker.image.avatar(),
    roomNumber: 1010,
    floor: 10,
    pricePerNight: 600.0,
    availability: false,
    sizeArea: 140,
  },
];

const Room = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [roomData, setRoomData] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDeleteAction = async () => {
    setShowModal(false);
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (datas) {
        setRoomData(datas);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (roomData) {
      const filtered = roomData.filter((data) =>
        data.roomNumber.toString().includes(query)
      );
      setFilteredData(filtered);
    }
  }, [query, roomData]);

  return (
    <div className="relative">
      <div
        className={`transition-opacity duration-500 ${
          showModal ? "opacity-50" : "opacity-100"
        }`}
      >
        <div className="flex flex-col">
          <div className="m-8">
            <div className="mb-4 flex justify-between">
              <ButtonCreate message={"Room"} />
              <SearchBar
                query={query}
                handleSearch={handleSearch}
                message={"room number"}
              />
            </div>
            <div class="min-w-full inline-block align-middle">
              <RoomTable
                datas={filteredData}
                onDeleteClick={handleDeleteClick}
              />
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <DeleteModal onClose={handleCloseModal} onDelete={handleDeleteAction} />
      )}
    </div>
  );
};

export default Room;
