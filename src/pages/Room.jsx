import React from 'react'
import ButtonCreate from '../components/small/ButtonCreate';
import RoomTable from '../components/table/RoomTable';
import SearchBar from '../components/small/SearchBar';

const Room = () => {
  // const datas = [...Array(10)].map(dummyBed);
  return (
    <div>
      <div>
        <div class="flex flex-col">
          <div class="m-8">
            <div className="mb-4 flex justify-between">
              <ButtonCreate message={"Room"} />
              <SearchBar message={"room number"} />
            </div>
            <div class="min-w-full inline-block align-middle">
              {/* <RoomTableTable datas={datas} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room