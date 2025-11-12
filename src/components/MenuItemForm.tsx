import React, { useState } from "react";
import { MenuItem } from "../models/types";
import { v4 as uuidv4 } from "uuid";

interface Props {
  onAddItem: (item: MenuItem) => void;
}

const MenuItemForm: React.FC<Props> = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("Starter");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !description || price <= 0) return;

    onAddItem({
      id: uuidv4(),
      name,
      course,
      description,
      price,
    });

    setName("");
    setCourse("Starter");
    setDescription("");
    setPrice(0);
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded-md space-y-3">
      <h2 className="text-xl font-semibold mb-2">Add Menu Item</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border px-2 py-1 w-full"
      />

      <select
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        className="border px-2 py-1 w-full"
      >
        <option value="Starter">Starter</option>
        <option value="Main">Main</option>
        <option value="Dessert">Dessert</option>
      </select>

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border px-2 py-1 w-full"
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="border px-2 py-1 w-full"
      />

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Item
      </button>
    </form>
  );
};

export default MenuItemForm;
