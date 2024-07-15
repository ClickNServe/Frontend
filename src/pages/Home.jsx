import React, { useEffect, useState } from "react";
import OrderTable from "../components/table/OrderTable";
import SearchBar from "../components/small/SearchBar";
import DetailReservationModal from "../components/modal/read/DetailReservationModal";
import axios from "axios";
import { API_URL } from "../services/Config";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [reservationData, setReservationData] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleCloseDetailModal = () => {
    setShowModal(false);
  };

  const handleDetailClick = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/all_orders`)
        if (res.status === 200) {
          console.log(res)
        }
      }
      catch (error) {
        console.log(error.response)
      }
      if (datas) {
        setReservationData(datas);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (reservationData) {
      const filtered = reservationData.filter(
        (data) =>
          data.roomNumber.toString().includes(query) ||
          data.name.toLowerCase().includes(query.toLowerCase()) ||
          data.contact.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [query, reservationData]);

  return (
    <div className="relative">
      <div
        className={`transition-opacity duration-500 ${
          showModal ? "opacity-50" : "opacity-100"
        }`}
      >
        <div className="flex flex-col">
          <div className="m-8">
            <div className="mb-4 flex justify-end">
              <SearchBar
                query={query}
                handleSearch={handleSearch}
                message={"reservation"}
              />
            </div>
            <div className="min-w-full inline-block align-middle">
              <OrderTable
                datas={filteredData}
                onDetailClick={handleDetailClick}
              />
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <DetailReservationModal
          onClose={handleCloseDetailModal}
          data={datas[selectedId]}
        />
      )}
    </div>
  );
};

export default Home;
