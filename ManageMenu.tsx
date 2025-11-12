// src/components/ManageMenu.tsx
import React from "react";
import { MenuItem } from "../models/types";
import MenuItemForm from "./MenuItemForm";
import MenuList from "./MenuList";

const ManageMenu: React.FC<{
  items: MenuItem[];
  setItems: (i: MenuItem[]) => void;
}> = ({ items, setItems }) => {
  const handleAdd = (item: MenuItem) => {
    setItems([item, ...items]);
  };

  const handleRemove = (id: string) => {
    setItems(items.filter((it) => it.id !== id));
  };

  return (
    <div>
      <h1>Manage Menu</h1>
      <MenuItemForm onAdd={handleAdd} />
      <h3>Current items</h3>
      <MenuList items={items} onRemove={handleRemove} />
    </div>
  );
};

export default ManageMenu;
