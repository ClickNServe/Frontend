import React, { useEffect, useState } from "react";
import OrderTable from "../components/table/OrderTable";
import SearchBar from "../components/small/SearchBar";
import DetailReservationModal from "../components/modal/read/DetailReservationModal";
import axios from "axios";
import { API_URL } from "../services/Config";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [roomData, setRoomData] = useState([]);
  const [reservationData, setReservationData] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false)

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
    let isMounted = true;

    const fetchRoomData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API_URL}/all_rooms`);
        if (res.status === 200) {
          setRoomData(res?.data);
        }
      } catch (error) {
        console.log(error.response);
      }
      finally {
        if (isMounted) setLoading(false)
      }
    };
    fetchRoomData();
    return () => {
      isMounted = false
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/all_orders`);
        if (res.status === 200) {
          setReservationData(res?.data);
        }
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [reservationData]);

  useEffect(() => {
    if (reservationData) {
      const filtered = reservationData.filter(
        (data) =>
          data.name.toLowerCase().includes(query.toLowerCase()) ||
          data.contact.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [query, reservationData]);

  if (loading) {
    return (
      <div></div>
    )
  }

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
                roomData={roomData}
              />
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <DetailReservationModal
          onClose={handleCloseDetailModal}
          data={filteredData[selectedId]}
          roomData={roomData}
        />
      )}
    </div>
  );
};

export default Home;
