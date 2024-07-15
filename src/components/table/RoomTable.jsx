import React from "react";
import { roomAttribute } from "../../services/ContentList";
import { tdStyle, thStyle } from "../../services/Helper";

const RoomTable = ({ datas, onDeleteClick, onDetailClick, onUpdateClick }) => {
  return (
    <div className="border rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-indigo-500">
          <tr>
            {roomAttribute.map((content, index) => (
              <th key={index} scope="col" className={thStyle}>
                {content.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-center">
          {datas.map((data, index) => (
            <tr key={index}>
              <td className={tdStyle}> {index + 1} </td>
              <td className={tdStyle}>
                <img
                  src={data.picture}
                  alt={data.roomnumber}
                  className="w-32 h-24 rounded-2xl"
                />
              </td>
              <td className={tdStyle}> {data.roomnumber} </td>
              <td className={tdStyle}> ${data.pricepernight} </td>
              <td className={tdStyle}>
                {data.availability ? (
                  <div className="text-green-800 bg-green-200 rounded-xl mx-6 uppercase font-bold">
                    Yes
                  </div>
                ) : (
                  <div className="text-red-800 bg-red-200 rounded-xl mx-5 font-bold uppercase">
                    No
                  </div>
                )}
              </td>
              <td className={tdStyle}> {data.sizearea}m² </td>
              <td className={tdStyle}>
                <button
                  onClick={() => onDetailClick(index, data.id)}
                  type="button"
                  className="inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800"
                >
                  Detail
                </button>
                <button
                  onClick={() => onUpdateClick(index, data.id)}
                  type="button"
                  className="mx-1 inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-green-600 hover:text-green-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDeleteClick(index, data.id)}
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
