import React, { useState, useEffect } from "react";
import { filterData, apiUrl } from "./data";
import FiltersName from "./components/FiltersName";
import Cards from "./components/Cards";

const App = () => {
  const [filterNameData, setFilterNameData] = useState(filterData);
  const [apiUrlData, setApiUrlData] = useState([]);
  const [categoryData, setCategoryData] = useState("All");

  async function fetchApiData() {
    try {
      const fetchData = await fetch(apiUrl);
      const data = await fetchData.json();
      setApiUrlData(data.data);

      console.log(data.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">TOP COURSES</h1>
      <FiltersName
        key={FiltersName.id}
        filterNameData={filterNameData}
        setCategoryData={setCategoryData}
      />
      <Cards apiUrlData={apiUrlData} categoryData={categoryData} />
    </div>
  );
};

export default App;
