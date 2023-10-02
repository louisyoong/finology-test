import CarTypeSelect from "@/components/CarTypeSelect";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto my-5">
      <h1 className="text-3xl font-bold uppercase">Display Car Type</h1>
      <CarTypeSelect />
    </div>
  );
};

export default Home;
