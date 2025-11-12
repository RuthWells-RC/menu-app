import React, { useState } from "react";
import { MenuItem } from "../models/types";
import MenuList from "./MenuList";

interface Props {
  items: MenuItem[];
}

const Home: React.FC<Props> = ({ items }) => {
  const [filter, setFilter] = useState<string>("All");

  const filteredItems =
    filter === "All" ? items : items.filter((item) => item.course === filter);

  // Calculations for dashboard
  const totalItems = items.length;
  const coursePrices: { [course: string]: number[] } = {};
  const courseRevenue: { [course: string]: number } = {};

  items.forEach((item) => {
    if (!coursePrices[item.course]) coursePrices[item.course] = [];
    coursePrices[item.course].push(item.price);

    if (!courseRevenue[item.course]) courseRevenue[item.course] = 0;
    courseRevenue[item.course] += item.price;
  });

  const averagePrices = Object.entries(coursePrices).map(
    ([course, prices]) => ({
      course,
      avgPrice: (prices.reduce((a, b) => a + b, 0) / prices.length).toFixed(2),
      totalRevenue: courseRevenue[course].toFixed(2),
    })
  );

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold mb-4">Home</h1>

      {/* Dashboard */}
      <div>
        <p className="text-lg mb-2">
          Total menu items: <span className="font-semibold">{totalItems}</span>
        </p>

        <h2 className="text-xl font-semibold mb-2">
          Average Price & Total Revenue per Course
        </h2>
        {averagePrices.length > 0 ? (
          <table className="min-w-full border border-gray-300 rounded-md overflow-hidden mb-6">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border-b text-left">Course</th>
                <th className="px-4 py-2 border-b text-left">
                  Average Price (R)
                </th>
                <th className="px-4 py-2 border-b text-left">
                  Total Revenue (R)
                </th>
              </tr>
            </thead>
            <tbody>
              {averagePrices.map(({ course, avgPrice, totalRevenue }) => (
                <tr key={course} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{course}</td>
                  <td className="px-4 py-2 border-b">{avgPrice}</td>
                  <td className="px-4 py-2 border-b">{totalRevenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">No menu items yet.</p>
        )}
      </div>

      {/* Filter */}
      <div>
        <label className="mr-2 font-semibold">Filter by Course:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border px-2 py-1 mb-4"
        >
          <option value="All">All</option>
          <option value="Starter">Starter</option>
          <option value="Main">Main</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      {/* Menu Items */}
      <MenuList items={filteredItems} />
    </div>
  );
};

export default Home;
