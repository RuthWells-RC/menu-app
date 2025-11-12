import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ManageMenu from "./components/ManageMenu";
import { MenuItem } from "./models/types";

const App: React.FC = () => {
  const [items, setItems] = useState<MenuItem[]>([]);

  return (
    <Router>
      <nav className="p-4 border-b mb-4 flex gap-4">
        <Link className="text-blue-600 hover:underline" to="/">
          Home
        </Link>
        <Link className="text-blue-600 hover:underline" to="/manage">
          Manage Menu
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home items={items} />} />
        <Route
          path="/manage"
          element={<ManageMenu items={items} setItems={setItems} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
