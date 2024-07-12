import React from "react";
import { tdStyle, thStyle } from "../../services/Helper";
import { orderAttribute } from "../../services/ContentList";

const OrderTable = ({ datas }) => {
  return (
    <div className="border rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-indigo-500">
          {orderAttribute.map((content, index) => (
            <th key={index} scope="col" className={thStyle}>
              {content.name}
            </th>
          ))}
        </thead>
        <tbody className="divide-y divide-gray-200 text-center">
          {datas.map((data, index) => (
            <tr key={index}>
              <td className={tdStyle}> {index} </td>
              <td className={tdStyle}> {data.name} </td>
              <td className={tdStyle}> {data.contact} </td>
              <td className={tdStyle}> {data.roomNumber} </td>
              <td className={tdStyle}> Rp. {data.charge} </td>
              <td className={tdStyle}>
                <button
                  type="button"
                  className="mr-1 inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800"
                >
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
