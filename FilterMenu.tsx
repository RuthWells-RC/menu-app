// src/components/FilterMenu.tsx
import React, { useState } from "react";
type Course = "starter" | "main" | "dessert" | "drink";

interface MenuItem {
  id: string | number;
  name: string;
  price: number;
  course: Course;
}

const FilterMenu: React.FC<{ items: MenuItem[] }> = ({ items }) => {
  const [filter, setFilter] = useState<Course | "all">("all");
  const displayed =
    filter === "all" ? items : items.filter((i) => i.course === filter);

  return (
    <div>
      <h1>Filter Menu</h1>
      <label>
        Show:
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as Course | "all")}
        >
          <option value="all">All</option>
          <option value="starter">Starters</option>
          <option value="main">Mains</option>
          <option value="dessert">Desserts</option>
          <option value="drink">Drinks</option>
        </select>
      </label>

      <ul>
        {displayed.map((it) => (
          <li key={it.id}>
            {it.name} — ₦{it.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterMenu;
