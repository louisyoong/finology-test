import { useRouter } from "next/router";
import carModels from "../../data/carData";

const CarDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the car with the matching id
  const car = carModels.find((c) => c.id === id);

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div>
      <h1>{car.model} Details</h1>
      <p>Description: {car.description}</p>
      <p>Brand: {car.brand}</p>
      <p>Year: {car.year}</p>
    </div>
  );
};

export default CarDetails;
