import React, { useState } from "react";
import Modal from "../../components/ui/modal";
import api from "../../configs/axios";
import { useItems } from "../../hooks/item";

const Home = () => {
  const { data, getItems } = useItems();
  const [newItem, setNewItem] = useState({});

  const handleChange = (event) => {
    const { value, name } = event.target;

    setNewItem({ ...newItem, [name]: value });
  };

  const submitNewItem = () => {
    api.post("/items", newItem).then((response) => {
      if (response.id) getItems();
    });
  };

  return (
    <div className="min-h-screen bg-blue-600  gap-4 flex  content-start flex-wrap">
      <div className="my-4 border-b w-full px-4 border-white flex justify-between">
        <h1 className=" text-4xl font-bold  text-white ">Dashboard</h1>
        <Modal>
          <div className=" p-10 pt-4 flex flex-col gap-2">
            <h1 className="text-center text-4xl font-bold my-4 text-blue-600">
              Add Item
            </h1>
            <div className="bg-blue-600 p-2 text-white flex flex-col rounded">
              <label className="text-xs">Item Name</label>
              <input
                className="rounded p-0.5 text-sm px-2 bg-white text-blue-600"
                type="text"
                name="name"
                value={newItem.name}
                onChange={handleChange}
              />
            </div>
            <div className="bg-blue-600 p-2 text-white flex flex-col rounded">
              <label className="text-xs">Item Description</label>
              <textarea
                className="rounded p-0.5 text-sm px-2 bg-white text-blue-600"
                type="password"
                name="description"
                value={newItem.description}
                onChange={handleChange}
              />
            </div>
            <div className="pt-2">
              <button
                className="bg-blue-600 text-white p-1 px-4 rounded w-full"
                type="button"
                onClick={submitNewItem}
              >
                Submit
              </button>
            </div>
          </div>
        </Modal>
      </div>
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
