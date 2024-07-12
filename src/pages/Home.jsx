import React from 'react'
import OrderTable from '../components/table/OrderTable';
import SearchBar from '../components/small/SearchBar';
import ButtonCreate from '../components/small/ButtonCreate';
import { faker } from '@faker-js/faker';

const dummyOrder = () => {
  return {
    name: faker.person.firstName(),
    contact: faker.internet.email(),
    roomNumber: faker.number.int({min: 1, max: 100}),
    checkIn: faker.date.anytime().toISOString(),
    checkOut: faker.date.anytime().toISOString(),
    orderTime: faker.date.anytime().toISOString(),
    charge: parseFloat(faker.finance.amount(50, 2000000, 2))
  }
}

const Home = () => {
  const datas = [...Array(10)].map(dummyOrder);
  return (
    <div>
      <div>
        <div className="flex flex-col">
          <div className="m-8">
            <div className="mb-4 flex justify-between">
              <ButtonCreate message={"Reservation"} />
              <SearchBar message={"reservation"} />
            </div>
            <div class="min-w-full inline-block align-middle">
              <OrderTable datas={datas} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home