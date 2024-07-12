import React from "react";
import { roomAttribute } from "../../services/ContentList";
import { tdStyle, thStyle } from "../../services/Helper";

const RoomTable = ({ datas }) => {
  return (
    <div className="border rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-indigo-500">
          {roomAttribute.map((content, index) => (
            <th key={index} scope="col" className={thStyle}>
              {content.name}
            </th>
          ))}
        </thead>
        <tbody className="divide-y divide-gray-200 text-center">
          {datas.map((data, index) => (
            <tr key={index}>
              <td className={tdStyle}> {index} </td>
              <td className={tdStyle}>
                <img src={data.picture} alt={data.roomNumber} className="w-32 h-24 rounded-2xl" />
              </td>
              <td className={tdStyle}> {data.floor} </td>
              <td className={tdStyle}> {data.roomNumber} </td>
              <td className={tdStyle}> Rp. {data.pricePerNight} </td>
              <td className={tdStyle}>
                {data.availability ? <div>N</div> : <div>K</div>}
              </td>
              <td className={tdStyle}> {data.sizeArea}m </td>
              <td className={tdStyle}>
              <button
                  type="button"
                  className="inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800"
                >
                  Detail
                </button>
                <button
                  type="button"
                  className="mx-1 inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-green-600 hover:text-green-800"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomTable;
