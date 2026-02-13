import React, { useState } from "react";
import ProductExperiment from "./ProductExperiment";
import LibraryExperiment from "./components/LibraryExperiment";
import PersonExperiment from "./PersonExperiment";
import "./App.css";

function App() {
  const [experiment, setExperiment] = useState("product");

  return (
    <div className="main-container">
      
      {/* ===== Navigation Bar ===== */}
      <div className="navbar">
        <button
          className={experiment === "product" ? "active" : ""}
          onClick={() => setExperiment("product")}
        >
          Product Experiment
        </button>

        <button
          className={experiment === "library" ? "active" : ""}
          onClick={() => setExperiment("library")}
        >
          Library Experiment
        </button>

        <button
          className={experiment === "person" ? "active" : ""}
          onClick={() => setExperiment("person")}
        >
          Person OOP Experiment
        </button>
      </div>

      {/* ===== Experiment Rendering ===== */}
      <div className="experiment-wrapper">
        {experiment === "product" && <ProductExperiment />}
        {experiment === "library" && <LibraryExperiment />}
        {experiment === "person" && <PersonExperiment />}
      </div>

    </div>
  );
}

export default App;
