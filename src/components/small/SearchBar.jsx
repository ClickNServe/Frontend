import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({query, handleSearch, message}) => {

  return (
    <div className="">
      <label
        className="bg-white flex border py-1 px-1 rounded-full border-gray-400 focus-within:border-indigo-400"
        htmlFor="search-bar"
      >
        <input
          placeholder={`Search ${message}...`}
          className="pl-4 py-2 rounded-full flex-1 outline-none bg-white"
          value={query}
          onChange={handleSearch}
        />
        <button className="w-auto px-4 py-2 bg-indigo-500 text-white fill-white rounded-full">
          <div className="relative">
            <FaSearch />
          </div>
        </button>
      </label>
      
    </div>
  );
};

export default SearchBar;