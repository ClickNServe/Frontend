import React from 'react'
import ButtonCreate from '../components/small/ButtonCreate';
import RoomTable from '../components/table/RoomTable';
import SearchBar from '../components/small/SearchBar';
import { faker } from '@faker-js/faker';

const dummyRoom = () => {
  return {
    picture: faker.image.avatar(),
    roomNumber: faker.number.int({min: 1, max: 100}),
    floor: faker.number.int({ min: 1, max: 20}),
    pricePerNight: parseFloat(faker.finance.amount(50, 2000000, 2)),
    availability: false,
    sizeArea: faker.number.int({min: 50, max: 200})
  };
};

const Room = () => {
  const datas = [...Array(10)].map(dummyRoom);
  return (
    <div>
      <div>
        <div className="flex flex-col">
          <div className="m-8">
            <div className="mb-4 flex justify-between">
              <ButtonCreate message={"Room"} />
              <SearchBar message={"room number"} />
            </div>
            <div class="min-w-full inline-block align-middle">
              <RoomTable datas={datas} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room