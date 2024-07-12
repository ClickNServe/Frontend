import { faker } from "@faker-js/faker";
import React from "react";
import { tdStyle, thStyle } from "../services/Helper";
import ButtonCreate from "../components/small/ButtonCreate";
import SearchBar from "../components/small/SearchBar";
import BedTable from "../components/table/BedTable";

const dummyBed = () => {
  return {
    bedType: faker.lorem.word(),
    price: parseFloat(faker.finance.amount(50, 200, 2)),
  };
};

const Bed = () => {
  const datas = [...Array(10)].map(dummyBed);
  return (
    <div>
      <div>
        <div class="flex flex-col">
          <div class="m-8">
            <div className="mb-4 flex justify-between">
              <ButtonCreate message={"Bed"} />
              <SearchBar message={"bed type"} />
            </div>
            <div class="min-w-full inline-block align-middle">
              <BedTable datas={datas} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bed;
