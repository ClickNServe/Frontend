import React from "react";
import { bedAttribute, facilityAttribute } from "../../services/ContentList";
import { tdStyle, thStyle } from "../../services/Helper";

const FacilityTable = ({ datas, onDeleteClick }) => {
  return (
    <div className="border rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-indigo-500">
          <tr>
            {facilityAttribute.map((content, index) => (
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
              <td className={tdStyle}> {data.facilityName} </td>
              <td className={tdStyle}> {data.price} </td>
              <td className={tdStyle}>
                <button
                  type="button"
                  className="mr-1 inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-green-600 hover:text-green-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDeleteClick("0")}
                  type="button"
                  className="ml-1 inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800"
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

export default FacilityTable;
