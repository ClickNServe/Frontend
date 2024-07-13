import React, { useEffect, useState } from "react";
import OrderTable from "../components/table/OrderTable";
import SearchBar from "../components/small/SearchBar";
import DetailReservationModal from "../components/modal/read/DetailReservationModal";

const datas = [
  {
    name: "John",
    contact: "john@example.com",
    roomNumber: 101,
    checkIn: new Date(2023, 6, 15).toISOString(),
    checkOut: new Date(2023, 6, 20).toISOString(),
    orderTime: new Date(2023, 6, 10).toISOString(),
    charge: 150.0,
  },
  {
    name: "Alice",
    contact: "alice@example.com",
    roomNumber: 202,
    checkIn: new Date(2023, 6, 18).toISOString(),
    checkOut: new Date(2023, 6, 25).toISOString(),
    orderTime: new Date(2023, 6, 12).toISOString(),
    charge: 200.0,
  },
  {
    name: "Bob",
    contact: "bob@example.com",
    roomNumber: 303,
    checkIn: new Date(2023, 6, 17).toISOString(),
    checkOut: new Date(2023, 6, 22).toISOString(),
    orderTime: new Date(2023, 6, 11).toISOString(),
    charge: 250.0,
  },
  {
    name: "Carol",
    contact: "carol@example.com",
    roomNumber: 404,
    checkIn: new Date(2023, 6, 19).toISOString(),
    checkOut: new Date(2023, 6, 24).toISOString(),
    orderTime: new Date(2023, 6, 13).toISOString(),
    charge: 300.0,
  },
  {
    name: "David",
    contact: "david@example.com",
    roomNumber: 505,
    checkIn: new Date(2023, 6, 20).toISOString(),
    checkOut: new Date(2023, 6, 28).toISOString(),
    orderTime: new Date(2023, 6, 14).toISOString(),
    charge: 350.0,
  },
  {
    name: "Eva",
    contact: "eva@example.com",
    roomNumber: 606,
    checkIn: new Date(2023, 6, 21).toISOString(),
    checkOut: new Date(2023, 6, 27).toISOString(),
    orderTime: new Date(2023, 6, 15).toISOString(),
    charge: 400.0,
  },
  {
    name: "Frank",
    contact: "frank@example.com",
    roomNumber: 707,
    checkIn: new Date(2023, 6, 22).toISOString(),
    checkOut: new Date(2023, 6, 30).toISOString(),
    orderTime: new Date(2023, 6, 16).toISOString(),
    charge: 450.0,
  },
  {
    name: "Grace",
    contact: "grace@example.com",
    roomNumber: 808,
    checkIn: new Date(2023, 6, 23).toISOString(),
    checkOut: new Date(2023, 6, 29).toISOString(),
    orderTime: new Date(2023, 6, 17).toISOString(),
    charge: 500.0,
  },
  {
    name: "Henry",
    contact: "henry@example.com",
    roomNumber: 909,
    checkIn: new Date(2023, 6, 24).toISOString(),
    checkOut: new Date(2023, 6, 31).toISOString(),
    orderTime: new Date(2023, 6, 18).toISOString(),
    charge: 550.0,
  },
  {
    name: "Ivy",
    contact: "ivy@example.com",
    roomNumber: 1010,
    checkIn: new Date(2023, 6, 25).toISOString(),
    checkOut: new Date(2023, 7, 2).toISOString(),
    orderTime: new Date(2023, 6, 19).toISOString(),
    charge: 600.0,
  },
];

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
