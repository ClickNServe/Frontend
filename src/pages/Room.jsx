import React, { useEffect, useState } from "react";
import ButtonCreate from "../components/small/ButtonCreate";
import RoomTable from "../components/table/RoomTable";
import SearchBar from "../components/small/SearchBar";
import { faker } from "@faker-js/faker";
import DeleteModal from "../components/modal/delete/DeleteModal";
import DetailRoomModal from "../components/modal/read/DetailRoomModal";
import UpdateRoomModal from "../components/modal/update/UpdateRoomModal";
import CreateRoomModal from "../components/modal/create/CreateRoomModal";

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
  // modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showCreateReservation, setShowCreateReservation] = useState(false);

  // data
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [roomData, setRoomData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [createRoomData, setCreateRoomData] = useState({
    picture: "",
    roomNumber: "",
    pricePerNight: "",
    availability: false,
    facilities: [{ facilityName: "" }],
    beds: [{ bedType: "" }],
    sizeArea: "",
  });
  const [updateRoomData, setUpdateRoomData] = useState({
    picture: "",
    roomNumber: "",
    pricePerNight: "",
    availability: false,
    facilities: [{ facilityName: "" }],
    beds: [{ bedType: "" }],
    sizeArea: "",
  });

  // create action
  const handleCreateDataChange = (field, value) => {
    setCreateRoomData({ ...createRoomData, [field]: value });
  };
  const handleCreateClick = () => {
    setShowCreateModal(true);
  };
  const handleCloseCreateModal = () => {
    setShowCreateModal(false);
  };
  const handleCreateAction = async () => {
    setShowCreateModal(false);
    resetCreateAction();
  };
  const resetCreateAction = () => {
    setCreateRoomData({
      picture: "",
      roomNumber: "",
      pricePerNight: "",
      availability: false,
      facilities: [{ facilityName: "" }],
      beds: [{ bedType: "" }],
      sizeArea: "",
    });
  };

  // update action
  const handleUpdateDataChange = (field, value) => {
    setUpdateRoomData({ ...updateRoomData, [field]: value });
  };
  const handleUpdateClick = () => {
    setShowUpdateModal(true);
  };
  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
  };
  const handleUpdateAction = async () => {
    setShowUpdateModal(false);
    resetUpdateAction();
  };
  const resetUpdateAction = () => {
    setUpdateRoomData({
      picture: "",
      roomNumber: "",
      pricePerNight: "",
      availability: false,
      facilities: [{ facilityName: "" }],
      beds: [{ bedType: "" }],
      sizeArea: "",
    });
  };

  // delete action
  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setShowDeleteModal(true);
  };
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };
  const handleDeleteAction = async () => {
    setShowDeleteModal(false);
  };

  // detail action
  const handleDetailClick = (id) => {
    setSelectedId(id);
    setShowDetailModal(true);
  };
  const handleCloseDetailModal = () => {
    setShowDetailModal(false);
  };

  // search action
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
          showDeleteModal ||
          showDetailModal ||
          showUpdateModal ||
          showCreateReservation
            ? "opacity-50"
            : "opacity-100"
        }`}
      >
        <div className="flex flex-col">
          <div className="m-8">
            <div className="mb-4 flex justify-between">
              <ButtonCreate message={"Room"} createAction={handleCreateClick} />
              <SearchBar
                query={query}
                handleSearch={handleSearch}
                message={"room number"}
              />
            </div>
            <div className="min-w-full inline-block align-middle">
              <RoomTable
                datas={filteredData}
                onDeleteClick={handleDeleteClick}
                onDetailClick={handleDetailClick}
                onUpdateClick={handleUpdateClick}
              />
            </div>
          </div>
        </div>
      </div>
      {showDeleteModal && (
        <DeleteModal
          onClose={handleCloseDeleteModal}
          onDelete={handleDeleteAction}
        />
      )}
      {showDetailModal && (
        <DetailRoomModal
          onClose={handleCloseDetailModal}
          data={datas[selectedId]}
        />
      )}
      {showCreateModal && (
        <CreateRoomModal
          onClose={handleCloseCreateModal}
          createRoomData={createRoomData}
          onChange={handleCreateDataChange}
          onAction={handleCreateAction}
        />
      )}
      {showUpdateModal && (
        <UpdateRoomModal
          data={filteredData[selectedId]}
          onClose={handleCloseUpdateModal}
          updateRoomData={updateRoomData}
          onChange={handleUpdateDataChange}
          onAction={handleUpdateAction}
        />
      )}
    </div>
  );
};

export default Room;
