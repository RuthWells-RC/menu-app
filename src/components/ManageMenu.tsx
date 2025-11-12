import React from "react";
import { MenuItem } from "../models/types";
import MenuItemForm from "./MenuItemForm";
import MenuList from "./MenuList";

interface Props {
  items: MenuItem[];
  setItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}

const ManageMenu: React.FC<Props> = ({ items, setItems }) => {
  const handleAddItem = (newItem: MenuItem) => {
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-4">Manage Menu</h1>

      <MenuItemForm onAddItem={handleAddItem} />

      <h2 className="text-xl font-semibold mt-6 mb-2">Current Menu Items</h2>
      <MenuList items={items} onRemoveItem={handleRemoveItem} />
    </div>
  );
};

export default ManageMenu;
