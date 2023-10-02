import React, { useState } from "react";
import carModels from "../../data/carData";
import Link from "next/link";
import Image from "next/image";
import MetaTitle from "../../components/MetaTitle";

const CarList: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Function to filter cars by type
  const filteredCars = selectedType
    ? carModels.filter((car: any) => car.type === selectedType)
    : carModels;

  // Function to render a single car card
  const renderCarCard = (car: any) => {
    return (
      <div key={car.id}>
        <div className="bg-white shadow-lg rounded-lg hover:shadow-blue-200 hover:shadow-md overflow-hidden">
          <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
            <Image
              src={car.image}
              alt={car.model}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-4">
            <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mr-2">
              {car.brand}
            </span>
            <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              {car.year}
            </span>
            <h2 className="text-2xl font-semibold">{car.model}</h2>
            <p className="text-gray-500">{car.description}</p>
            <div className="flex justify-end mt-2 text-blue-500 hover:text-blue-600 font-semibold">
              <Link href={`/car/details/${car.id}`}>Read More </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <MetaTitle
        title="Cars List"
        description="View list of cars with their related information."
      />

      <div className="container mx-auto py-4">
        <select
          onChange={(e) => setSelectedType(e.target.value)}
          value={selectedType || ""}
          className="w-full md:w-1/3 lg:w1/2 p-2 border border-gray-300 rounded-lg mb-4"
        >
          <option value="">All Types</option>
          <option value="electric-car">Electric Car</option>
          <option value="2-wheels">2 Wheels</option>
          <option value="sport">Sport Car</option>
        </select>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {filteredCars.map(renderCarCard)}
        </div>
      </div>
    </>
  );
};

export default CarList;
