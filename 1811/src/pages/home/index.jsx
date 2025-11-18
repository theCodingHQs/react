import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/items", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return (
    <div className="min-h-screen bg-blue-600  gap-4 flex  content-start flex-wrap">
      <h1 className=" text-4xl font-bold my-4 text-white border-b w-full px-4">
        Dashboard
      </h1>
      <div className="flex items-start content-start flex-wrap gap-4 px-10  flex-1 h-full">
        {data.map((item) => {
          return (
            <div className="bg-white p-2 flex gap-1 flex-col rounded shadow">
              <div className="flex  gap-2">
                <div>Title</div>
                <div className="text-blue-600 bg-blue-600/10 px-2 flex-1 rounded">
                  {item.name}
                </div>
              </div>
              <div className="flex  gap-2">
                <div>Description</div>
                <div className="text-blue-600 bg-blue-600/10 px-2 flex-1 rounded">
                  {item.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
