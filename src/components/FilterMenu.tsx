import React, { useState } from "react";
import { MenuItem } from "../models/types";

interface FilterMenuProps {
  items: MenuItem[];
}

const FilterMenu: React.FC<FilterMenuProps> = ({ items }) => {
  const [query, setQuery] = useState("");

  const filtered = items.filter((i) =>
    i.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Filter Menu</h2>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filtered.map((item) => (
          <li key={item.id}>
            {item.name} – ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterMenu;
