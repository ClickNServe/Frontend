import React, { useEffect, useState } from "react";
import ButtonCreate from "../components/small/ButtonCreate";
import RoomTable from "../components/table/RoomTable";
import SearchBar from "../components/small/SearchBar";
import { faker } from "@faker-js/faker";
import DeleteModal from "../components/modal/delete/DeleteModal";
import DetailRoomModal from "../components/modal/read/DetailRoomModal";
import UpdateRoomModal from "../components/modal/update/UpdateRoomModal";
import CreateRoomModal from "../components/modal/create/CreateRoomModal";
import CreateReservationModal from "../components/modal/create/CreateReservationModal";
import axios from "axios";
import { API_URL } from "../services/Config";

const Room = () => {
  // modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showCreateReservationModal, setShowCreateReservationModal] =
    useState(false);

  // data
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [selectedRoomId, setSelectedRoomId] = useState("");
  const [bedData, setBedData] = useState([]);
  const [facilityData, setFacilityData] = useState([]);
  const [roomData, setRoomData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [createRoomData, setCreateRoomData] = useState({
    picture: "",
    roomnumber: "",
    pricepernight: "",
    availability: false,
    facilityId: [],
    bedId: [],
    sizearea: "",
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
  const [createReservationData, setCreateReservationData] = useState({
    name: "",
    contact: "",
    roomNumber: "",
    checkIn: "",
    checkOut: "",
    orderTime: "",
    charge: "",
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
      roomnumber: "",
      pricepernight: "",
      availability: false,
      facilityId: [],
      bedId: [],
      sizearea: "",
    });
  };

  // update action
  const handleUpdateDataChange = (field, value) => {
    setUpdateRoomData({ ...updateRoomData, [field]: value });
  };
  const handleUpdateClick = (id) => {
    setSelectedId(id);
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

  // reserve action
  const handleReserveDataChange = (field, value) => {
    setCreateReservationData({ ...createReservationData, [field]: value });
  };
  const handleReserveClick = () => {
    setShowDetailModal(false);
    setShowCreateReservationModal(true);
  };
  const handleCloseReserveModal = () => {
    setShowCreateReservationModal(false);
  };
  const handleReserveAction = async () => {
    setShowCreateReservationModal(false);
    resetReserveAction();
  };
  const resetReserveAction = () => {
    setCreateReservationData({
      name: "",
      contact: "",
      roomNumber: "",
      checkIn: "",
      checkOut: "",
      orderTime: "",
      charge: "",
    });
  };

  // search action
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const fetchBedData = async () => {
      try {
        const res = await axios.get(`${API_URL}/all_beds`);
        if (res.status === 200) {
          setBedData(res?.data);
        }
      } catch (error) {
        console.log(error.response);
      }
    };
    const fetchFacilityData = async () => {
      try {
        const res = await axios.get(`${API_URL}/all_facilities`);
        if (res.status === 200) {
          setFacilityData(res?.data);
        }
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchBedData();
    fetchFacilityData();
  }, []);

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
          showCreateReservationModal
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
          onReserve={handleReserveClick}
        />
      )}
      {showCreateModal && (
        <CreateRoomModal
          bedOption={bedData}
          facilityOption={facilityData}
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
      {showCreateReservationModal && (
        <CreateReservationModal
          data={filteredData[selectedId]}
          onClose={handleCloseReserveModal}
          createReservationData={createReservationData}
          onChange={handleReserveDataChange}
          onAction={handleReserveAction}
        />
      )}
    </div>
  );
};

export default Room;
