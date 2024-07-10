import React, { useEffect, useState } from "react";

const Home = () => {
    const [orderData, setOrderData] = useState([])
  const data = [
    { id: 1, first: "Mark", last: "Otto", handle: "@mdo" },
    { id: 2, first: "Jacob", last: "Thornton", handle: "@fat" },
    {
      id: 3,
      first: "Larry ",
      last: "Bird",
      handle: "@twitter",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {

    }
    fetchData()
  }, [orderData])

  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-semibold mt-6 mb-3"> Order List </h1>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="bg-white min-w-full text-center text-sm font-light rounded-xl">
              <thead className="bg-indigo-600 font-medium text-white">
                <tr className="rounded-xl">
                  <th scope="col" className="px-6 py-4">
                    Order ID
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Rooms
                  </th>
                  <th scope="col" className="px-6 py-4">
                    User Email
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Check In
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Check Out
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Order Time
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Total Charge
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index} className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {row.id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">{row.first}</td>
                    <td className="whitespace-nowrap px-6 py-4">{row.last}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {row.handle}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
