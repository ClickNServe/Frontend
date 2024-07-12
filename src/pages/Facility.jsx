import React from 'react'
import FacilityTable from '../components/table/FacilityTable';
import SearchBar from '../components/small/SearchBar';
import ButtonCreate from '../components/small/ButtonCreate';
import { faker } from '@faker-js/faker';

const dummyFacility = () => {
  return {
    facilityName: faker.lorem.word(),
    price: parseFloat(faker.finance.amount(50, 200, 2)),
  };
};

const Facility = () => {
  const datas = [...Array(10)].map(dummyFacility);
  return (
    <div>
      <div>
        <div class="flex flex-col">
          <div class="m-8">
            <div className="mb-4 flex justify-between">
              <ButtonCreate message={"Facility"} />
              <SearchBar message={"facility name"} />
            </div>
            <div class="min-w-full inline-block align-middle">
              <FacilityTable datas={datas} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facility;