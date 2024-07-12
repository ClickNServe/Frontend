import React, { useEffect, useState } from "react";
import FacilityTable from "../components/table/FacilityTable";
import SearchBar from "../components/small/SearchBar";
import ButtonCreate from "../components/small/ButtonCreate";
import { faker } from "@faker-js/faker";
import DeleteModal from "../components/modal/DeleteModal";

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
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [facilityData, setFacilityData] = useState([]);
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
          showModal ? "opacity-50" : "opacity-100"
        }`}
      >
        <div class="flex flex-col">
          <div class="m-8">
            <div className="mb-4 flex justify-between">
              <ButtonCreate message={"Facility"} />
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

export default Facility;
