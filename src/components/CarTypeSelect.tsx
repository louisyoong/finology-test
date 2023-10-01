import React, { useState } from "react";
import carModels from "../data/carData";
import Link from "next/link";

const CarTypeSelect: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Function to filter cars by type
  const filteredCars = selectedType
    ? carModels.filter((car: any) => car.type === selectedType)
    : carModels;

  // Function to render a single car card
  const renderCarCard = (car: any) => {
    return (
      <div key={car.id} className="w-1/3 p-4">
        <Link href={`/car-details/${car.id}`}>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-2xl font-semibold">{car.model}</h2>
              <p className="text-gray-500">{car.description}</p>
              <p className="text-gray-700 mt-2">
                <span className="font-semibold">Brand:</span> {car.brand}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Year:</span> {car.year}
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  };

  // Function to render car rows
  const renderCarRows = () => {
    const carRows = [];
    for (let i = 0; i < filteredCars.length; i += 3) {
      const row = (
        <div key={i} className="flex space-x-4">
          {filteredCars.slice(i, i + 3).map(renderCarCard)}
        </div>
      );
      carRows.push(row);
    }
    return carRows;
  };

  return (
    <div>
      {/* Dropdown to select car type */}
      <select
        onChange={(e) => setSelectedType(e.target.value)}
        value={selectedType || ""}
        className="w-1/3 p-2 border border-gray-300 rounded-lg mb-4"
      >
        <option value="">All Types</option>
        <option value="electric-car">Electric Car</option>
        <option value="2-wheels">2 Wheels</option>
        <option value="sport">Sport Car</option>
      </select>

      {/* Display cars in rows */}
      {renderCarRows()}
    </div>
  );
};

export default CarTypeSelect;
