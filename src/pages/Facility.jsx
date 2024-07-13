import React, { useEffect, useState } from "react";
import FacilityTable from "../components/table/FacilityTable";
import SearchBar from "../components/small/SearchBar";
import ButtonCreate from "../components/small/ButtonCreate";
import { faker } from "@faker-js/faker";
import DeleteModal from "../components/modal/delete/DeleteModal";
import CreateFacilityModal from "../components/modal/create/CreateFacilityModal";
import UpdateFacilityModal from "../components/modal/update/UpdateFacilityModal";

const datas = [
  { facilityName: "Wi-Fi", price: 0.0 },
  { facilityName: "Television", price: 0.0 },
  { facilityName: "Air Conditioning", price: 0.0 },
  { facilityName: "Mini Bar", price: 50.0 },
  { facilityName: "Room Service", price: 30.0 },
  { facilityName: "Coffee Maker", price: 20.0 },
  { facilityName: "Safe", price: 0.0 },
  { facilityName: "Hair Dryer", price: 0.0 },
  { facilityName: "Bathrobe", price: 10.0 },
  { facilityName: "Iron and Ironing Board", price: 0.0 },
];

const Facility = () => {
  // modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  // data
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [facilityData, setFacilityData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [createFacilityData, setCreateFacilityData] = useState({
    facilityName: "",
    price: "",
  });
  const [updateFacilityData, setUpdateFacilityData] = useState({
    facilityName: "",
    price: "",
  });

  // create action
  const handleCreateDataChange = (field, value) => {
    setCreateFacilityData({ ...createFacilityData, [field]: value });
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
    setCreateFacilityData({
      facilityName: "",
      price: "",
    });
  };

  // update action
  const handleUpdateDataChange = (field, value) => {
    setUpdateFacilityData({ ...updateFacilityData, [field]: value });
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
    setUpdateBedData({
      facilityName: "",
      price: "",
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

  // search action
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (datas) {
        setFacilityData(datas);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (facilityData) {
      const filtered = facilityData.filter((data) =>
        data.facilityName.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [query, facilityData]);

  return (
    <div className="relative">
      <div
        className={`transition-opacity duration-500 ${
          showDeleteModal || showUpdateModal || showCreateModal
            ? "opacity-50"
            : "opacity-100"
        }`}
      >
        <div class="flex flex-col">
          <div class="m-8">
            <div className="mb-4 flex justify-between">
              <ButtonCreate
                message={"Facility"}
                createAction={handleCreateClick}
              />
              <SearchBar
                query={query}
                handleSearch={handleSearch}
                message={"facility name"}
              />
            </div>
            <div class="min-w-full inline-block align-middle">
              <FacilityTable
                datas={filteredData}
                onDeleteClick={handleDeleteClick}
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
      {showCreateModal && (
        <CreateFacilityModal
          onClose={handleCloseCreateModal}
          createFacilityData={createFacilityData}
          onChange={handleCreateDataChange}
          onAction={handleCreateAction}
        />
      )}
      {showUpdateModal && (
        <UpdateFacilityModal
          data={filteredData[selectedId]}
          onClose={handleCloseUpdateModal}
          updateFacilityData={updateFacilityData}
          onChange={handleUpdateDataChange}
          onAction={handleUpdateAction}
        />
      )}
    </div>
  );
};

export default Facility;
