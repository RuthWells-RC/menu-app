import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "../models/types";
import { calculateAveragePriceByCategory } from "../utils/calculations";

const loadMenu = (): MenuItem[] => {
  try {
    const raw = localStorage.getItem("menu");
    if (!raw) return [];
    return JSON.parse(raw) as MenuItem[];
  } catch {
    return [];
  }
};

const Home: React.FC = () => {
  const [averages, setAverages] = useState<{ [category: string]: number }>({});

  useEffect(() => {
    const items = loadMenu();
    const avg = calculateAveragePriceByCategory(items);
    setAverages(avg);
  }, []);

  return (
    <div className="home">
      <h1>Menu App Dashboard</h1>
      <p>Welcome! Here you can manage and view your restaurant menu.</p>

      <h2>Average Price by Course</h2>
      {Object.keys(averages).length === 0 ? (
        <p>No menu items yet. Add some from the Manage Menu page.</p>
      ) : (
        <ul>
          {Object.entries(averages).map(([category, avg]) => (
            <li key={category}>
              <strong>{category}</strong>: ${avg.toFixed(2)}
            </li>
          ))}
        </ul>
      )}

      <nav>
        <Link to="/manage">Manage Menu</Link> |{" "}
        <Link to="/filter">Filter Menu</Link>
      </nav>
    </div>
  );
};

export default Home;
