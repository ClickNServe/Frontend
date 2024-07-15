import React, { useEffect, useState } from "react";
import ButtonCreate from "../components/small/ButtonCreate";
import RoomTable from "../components/table/RoomTable";
import SearchBar from "../components/small/SearchBar";
import DeleteModal from "../components/modal/delete/DeleteModal";
import DetailRoomModal from "../components/modal/read/DetailRoomModal";
import UpdateRoomModal from "../components/modal/update/UpdateRoomModal";
import CreateRoomModal from "../components/modal/create/CreateRoomModal";
import CreateReservationModal from "../components/modal/create/CreateReservationModal";
import axios from "axios";
import { API_URL } from "../services/Config";
import { countTotalCharge } from "../services/Helper";

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
    availability: true,
    facilityId: [],
    bedId: [],
    sizearea: "",
  });
  const [updateRoomData, setUpdateRoomData] = useState({
    picture: "",
    roomnumber: "",
    pricepernight: "",
    availability: true,
    facilityId: [],
    bedId: [],
    sizearea: "",
  });
  const [createReservationData, setCreateReservationData] = useState({
    roomId: "",
    name: "",
    contact: "",
    checkIn: "",
    checkOut: "",
    orderTime: "",
    totalCharge: "",
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
    const postData = async () => {
      console.log(createRoomData);
      try {
        const formattedData = {
          ...createRoomData,
          pricepernight: parseFloat(createRoomData.pricepernight),
          sizearea: parseFloat(createRoomData.sizearea),
          roomnumber: parseInt(createRoomData.roomnumber),
        };
        console.log(formattedData);
        const res = await axios.post(
          `${API_URL}/create_new_room`,
          formattedData
        );
        if (res.status === 200) {
          console.log(res);
        }
      } catch (error) {
        console.log(error.response);
      }
    };
    postData();
    setShowCreateModal(false);
    resetCreateAction();
  };
  const resetCreateAction = () => {
    setCreateRoomData({
      picture: "",
      roomnumber: "",
      pricepernight: "",
      availability: true,
      facilityId: [],
      bedId: [],
      sizearea: "",
    });
  };

  // update action
  const handleUpdateDataChange = (field, value) => {
    setUpdateRoomData({ ...updateRoomData, [field]: value });
  };
  const handleUpdateClick = (index, roomId) => {
    setSelectedId(index);
    setSelectedRoomId(roomId);
    setShowUpdateModal(true);
  };
  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
  };
  const handleUpdateAction = async () => {
    const updateData = async () => {
      try {
        const formattedData = {
          ...updateRoomData,
          pricepernight: parseFloat(updateRoomData.pricepernight),
          sizearea: parseFloat(updateRoomData.sizearea),
          roomnumber: parseInt(updateRoomData.roomnumber),
        };
        console.log(formattedData);
        const res = await axios.patch(
          `${API_URL}/update_room/${selectedRoomId}`,
          formattedData
        );
        if (res.status === 200) {
          console.log(res);
        }
      } catch (error) {
        console.log(error.response);
      }
    };
    updateData();
    setShowUpdateModal(false);
    resetUpdateAction();
  };
  const resetUpdateAction = () => {
    setUpdateRoomData({
      picture: "",
      roomnumber: "",
      pricepernight: "",
      availability: true,
      facilityId: [],
      bedId: [],
      sizearea: "",
    });
  };

  // delete action
  const handleDeleteClick = (index, roomId) => {
    setSelectedId(index);
    setSelectedRoomId(roomId);
    setShowDeleteModal(true);
  };
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };
  const handleDeleteAction = async () => {
    const deleteData = async () => {
      try {
        const res = await axios.delete(
          `${API_URL}/delete_room/${selectedRoomId}`
        );
        if (res.status === 200) {
          console.log(res);
        }
      } catch (error) {
        console.log(error.response);
      }
    };
    deleteData();
    setShowDeleteModal(false);
  };

  // detail action
  const handleDetailClick = (index, roomId) => {
    setSelectedId(index);
    setSelectedRoomId(roomId);
    setShowDetailModal(true);
  };
  const handleCloseDetailModal = () => {
    setShowDetailModal(false);
  };

  // reserve action
  const counter = () => {
    const room = roomData.find((item) => item.id === selectedRoomId);
    return room.pricepernight;
  };
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
    console.log(createReservationData)
    const postData = async () => {
      try {
        const formattedData = {
          ...createReservationData,
          roomId: "selectedRoomId",
          totalCharge: parseFloat(
            countTotalCharge(
              createReservationData.checkIn,
              createReservationData.checkOut
            ) * counter()
          ),
          checkIn: parseString(
            new Date(createReservationData.checkIn).getTime() / 1000
          ),
          checkOut: parseString(
            new Date(createReservationData.checkOut).getTime() / 1000
          ),
          orderTime: parseString(new Date().getTime() / 1000),
        };
        console.log(formattedData)
        const res = await axios.post(
          `${API_URL}/reserve_room/${selectedRoomId}`,
          createReservationData
        );
        if (res.status === 200) {
          console.log(res);
        }
      } catch (error) {
        console.log(error.response);
      }
    };
    postData();
    setShowCreateReservationModal(false);
    resetReserveAction();
  };
  const resetReserveAction = () => {
    setCreateReservationData({
      name: "",
      contact: "",
      roomId: "",
      checkIn: "",
      checkOut: "",
      orderTime: "",
      totalCharge: "",
    });
    setSelectedRoomId("");
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
      try {
        const res = await axios.get(`${API_URL}/all_rooms`);
        if (res.status === 200) {
          setRoomData(res?.data);
        }
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [roomData]);

  useEffect(() => {
    if (roomData) {
      const filtered = roomData.filter((data) =>
        data.roomnumber.toString().includes(query)
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
          data={filteredData[selectedId]}
          onReserve={handleReserveClick}
          bedData={bedData}
          facilityData={facilityData}
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
          bedOption={bedData}
          facilityOption={facilityData}
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
