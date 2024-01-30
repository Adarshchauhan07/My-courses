import React from "react";

const FiltersName = ({ filterNameData, setCategoryData }) => {
  return (
    <div className="flex justify-center gap-4 p-4">
      {filterNameData.map((data) => (
        <button
          key={data.title}
          onClick={() => setCategoryData(data.title)}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow-md focus:outline-none focus:shadow-outline"
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default FiltersName;
