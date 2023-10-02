import CarsList from "@/pages/car/listing";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto my-5 px-5">
      <h1 className="text-3xl font-bold uppercase">Display Car Type</h1>
      <CarsList />
    </div>
  );
};

export default Home;
