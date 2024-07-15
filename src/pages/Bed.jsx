import { faker } from "@faker-js/faker";
import React, { useEffect, useState } from "react";
import { tdStyle, thStyle } from "../services/Helper";
import ButtonCreate from "../components/small/ButtonCreate";
import SearchBar from "../components/small/SearchBar";
import BedTable from "../components/table/BedTable";
import DeleteModal from "../components/modal/delete/DeleteModal";
import CreateBedModal from "../components/modal/create/CreateBedModal";
import UpdateBedModal from "../components/modal/update/UpdateBedModal";
import axios from "axios";
import { API_URL } from "../services/Config";

const Bed = () => {
  // modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  // data
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [selectedBedId, setSelectedBedId] = useState("");
  const [bedData, setBedData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [createBedData, setCreateBedData] = useState({
    bedtype: "",
    price: "",
  });
  const [updateBedData, setUpdateBedData] = useState({
    bedtype: "",
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
    console.log(createBedData);
    const postData = async () => {
      try {
        const formattedData = {
          ...createBedData,
          price: parseFloat(createBedData.price),
        };
        const res = await axios.post(
          `${API_URL}/create_new_bed`,
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
    setCreateBedData({
      bedtype: "",
      price: "",
    });
  };

  // update action
  const handleUpdateDataChange = (field, value) => {
    setUpdateBedData({ ...updateBedData, [field]: value });
  };
  const handleUpdateClick = (index, bedId) => {
    setSelectedId(index);
    setSelectedBedId(bedId)
    setShowUpdateModal(true);
  };
  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
  };
  const handleUpdateAction = async () => {
    const updateData = async () => {
      try {
        const formattedData = {
          ...updateBedData,
          price: parseFloat(updateBedData.price)
        };
        const res = await axios.patch(`${API_URL}/update_bed/${selectedBedId}`, formattedData)
        if (res.status === 200) {
          console.log(res)
        }
      }
      catch (error) {
        console.log(error.response);
      }

    }
    updateData();
    setShowUpdateModal(false);
    resetUpdateAction();
  };
  const resetUpdateAction = () => {
    setUpdateBedData({
      bedtype: "",
      price: "",
    });
  };

  // delete action
  const handleDeleteClick = (index, bedId) => {
    setSelectedId(index);
    setSelectedBedId(bedId);
    setShowDeleteModal(true);
  };
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };
  const handleDeleteAction = async () => {
    const deleteData = async () => {
      try {
        const res = await axios.delete(`${API_URL}/delete_bed/${selectedBedId}`)
        if (res.status === 200) {
          console.log(res)
        }
      }
      catch (error) {
        console.log(error.response)
      }
    }
    deleteData()
    setShowDeleteModal(false);
  };

  // search action
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/all_beds`);
        if (res.status === 200) {
          setBedData(res?.data);
          console.log(bedData);
        }
      } catch (error) {
        console.log(error.respones);
      }
    };
    fetchData();
  }, [bedData]);

  useEffect(() => {
    if (bedData) {
      const filtered = bedData.filter((data) =>
        data.bedtype && data.bedtype.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
      console.log(filteredData)
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
