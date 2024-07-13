import { faker } from "@faker-js/faker";
import React, { useEffect, useState } from "react";
import { tdStyle, thStyle } from "../services/Helper";
import ButtonCreate from "../components/small/ButtonCreate";
import SearchBar from "../components/small/SearchBar";
import BedTable from "../components/table/BedTable";
import DeleteModal from "../components/modal/delete/DeleteModal";
import CreateBedModal from "../components/modal/create/CreateBedModal";
import UpdateBedModal from "../components/modal/update/UpdateBedModal";

const datas = () => {
  return [
    { bedType: "Single", price: 100.0 },
    { bedType: "Double", price: 150.0 },
    { bedType: "Queen", price: 200.0 },
    { bedType: "King", price: 250.0 },
    { bedType: "Twin", price: 75.0 },
    { bedType: "Full", price: 175.0 },
    { bedType: "California King", price: 300.0 },
    { bedType: "Bunk", price: 125.0 },
    { bedType: "Murphy", price: 200.0 },
    { bedType: "Daybed", price: 180.0 },
  ];
};

const Bed = () => {
  // modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  // data
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [bedData, setBedData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [createBedData, setCreateBedData] = useState({
    bedType: "",
    price: "",
  });
  const [updateBedData, setUpdateBedData] = useState({
    bedType: "",
    price: "",
  });

  // create action
  const handleCreateDataChange = (field, value) => {
    setCreateBedData({ ...createBedData, [field]: value });
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
    setCreateBedData({
      bedType: "",
      price: "",
    });
  };

  // update action
  const handleUpdateDataChange = (field, value) => {
    setUpdateBedData({ ...updateBedData, [field]: value });
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
      bedType: "",
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
        setBedData(datas);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (bedData) {
      const filtered = bedData.filter((data) =>
        data.bedType.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [query, bedData]);

  return (
    <div className="relative">
      <div
        className={`transition-opacity duration-500 ${
          showDeleteModal || showCreateModal || showUpdateModal
            ? "opacity-50"
            : "opacity-100"
        }`}
      >
        <div className="flex flex-col">
          <div className="m-8">
            <div className="mb-4 flex justify-between">
              <ButtonCreate message={"Bed"} createAction={handleCreateClick} />
              <SearchBar
                query={query}
                handleSearch={handleSearch}
                message={"bed type"}
              />
            </div>
            <div className="min-w-full inline-block align-middle">
              <BedTable
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
        <CreateBedModal
          onClose={handleCloseCreateModal}
          createBedData={createBedData}
          onChange={handleCreateDataChange}
          onAction={handleCreateAction}
        />
      )}
      {showUpdateModal && (
        <UpdateBedModal
          data={filteredData[selectedId]}
          onClose={handleCloseUpdateModal}
          updateBedData={updateBedData}
          onChange={handleUpdateDataChange}
          onAction={handleUpdateAction}
        />
      )}
    </div>
  );
};

export default Bed;
