import React from "react";
import { MenuItem } from "../models/types";

interface Props {
  items: MenuItem[];
  onRemoveItem?: (id: string) => void;
}

const MenuList: React.FC<Props> = ({ items, onRemoveItem }) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li
        key={item.id}
        className="border p-2 rounded-md flex justify-between items-center"
      >
        <div>
          <strong>{item.name}</strong> — {item.course}
          <br />
          <em>{item.description}</em>
          <br />
          <span>R{item.price}</span>
        </div>
        {onRemoveItem && (
          <button
            onClick={() => onRemoveItem(item.id)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Remove
          </button>
        )}
      </li>
    ))}
  </ul>
);

export default MenuList;
