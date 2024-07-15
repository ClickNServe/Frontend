import React, { useEffect, useState } from "react";
import FacilityTable from "../components/table/FacilityTable";
import SearchBar from "../components/small/SearchBar";
import ButtonCreate from "../components/small/ButtonCreate";
import DeleteModal from "../components/modal/delete/DeleteModal";
import CreateFacilityModal from "../components/modal/create/CreateFacilityModal";
import UpdateFacilityModal from "../components/modal/update/UpdateFacilityModal";
import { API_URL } from "../services/Config";
import axios from "axios";

const Facility = () => {
  // modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  // data
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [selectedFacilityId, setSelectedFacilityId] = useState("");
  const [facilityData, setFacilityData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [createFacilityData, setCreateFacilityData] = useState({
    facilityname: "",
    price: "",
  });
  const [updateFacilityData, setUpdateFacilityData] = useState({
    facilityname: "",
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
    const postData = async () => {
      try {
        const formattedData = {
          ...createFacilityData,
          price: parseFloat(createFacilityData.price),
        };
        console.log(formattedData);
        const res = await axios.post(
          `${API_URL}/create_new_facility`,
          formattedData
        );
        console.log(res);
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
    setCreateFacilityData({
      facilityname: "",
      price: "",
    });
  };

  // update action
  const handleUpdateDataChange = (field, value) => {
    setUpdateFacilityData({ ...updateFacilityData, [field]: value });
  };
  const handleUpdateClick = (index, facilityId) => {
    setSelectedId(index);
    setSelectedFacilityId(facilityId);
    setShowUpdateModal(true);
  };
  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
  };
  const handleUpdateAction = async () => {
    const updateData = async () => {
      try {
        const formattedData = {
          ...updateFacilityData,
          price: parseFloat(updateFacilityData.price),
        };
        const res = await axios.patch(
          `${API_URL}/update_facility/${selectedFacilityId}`,
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
    setUpdateBedData({
      facilityname: "",
      price: "",
    });
  };

  // delete action
  const handleDeleteClick = (index, facilityId) => {
    setSelectedId(index);
    setSelectedFacilityId(facilityId);
    setShowDeleteModal(true);
  };
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };
  const handleDeleteAction = async () => {
    const deleteData = async () => {
      try {
        const res = await axios.delete(
          `${API_URL}/delete_facility/${selectedFacilityId}`
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

  // search action
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/all_facilities`);
        if (res.status === 200) {
          setFacilityData(res?.data);
          console.log(res);
        }
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [facilityData]);

  useEffect(() => {
    if (facilityData) {
      const filtered = facilityData.filter(
        (data) =>
          data.facilityname &&
          data.facilityname.toLowerCase().includes(query.toLowerCase())
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
        <div className="flex flex-col">
          <div className="m-8">
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
            <div className="min-w-full inline-block align-middle">
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
