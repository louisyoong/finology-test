import { useRouter } from "next/router";
import carModels from "../../../data/carData";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import MetaTitle from "@/components/MetaTitle";

const formatCarType = (type: any) => {
  return type
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char: any) => char.toUpperCase());
};

const CarDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the car with the matching id
  const car = carModels.find((c) => c.id === id);

  if (!car) {
    return <div>Car not found</div>;
  }

  // Define color class based on car type
  let typeColorClass = "";
  let typeBorderClass = "";

  switch (car.type) {
    case "electric-car":
      typeColorClass = "bg-green-100 text-green-600";
      typeBorderClass = "ring-green-300";
      break;
    case "2-wheels":
      typeColorClass = "bg-orange-100 text-orange-600";
      typeBorderClass = "ring-orange-300";
      break;
    case "sport":
      typeColorClass = "bg-red-100 text-red-600";
      typeBorderClass = "ring-red-300";
      break;
    default:
      break;
  }

  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <MetaTitle
        title={String(car.model)}
        description={String(car.description)}
      />

      <div className="container mx-auto flex flex-col items-center justify-center mt-10">
        <div className="w-10/12">
          <h1 className="flex items-center sm:text-lg md:text-3xl font-bold uppercase mb-3">
            <a
              className="focus:outline-none text-gray-800 hover:text-gray-600 cursor-pointer"
              onClick={goBack}
            >
              <FiArrowLeft className="mr-3" />
            </a>
            {car.model} Details
          </h1>
          <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-96">
            <Image
              src={car.image}
              alt={car.model}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <div>
              <p className="font-semibold">Brand</p>
              <p className="font-normal text-gray-600">{car.brand}</p>
            </div>
            <div>
              <p className="font-semibold">Model</p>
              <p className="font-normal text-gray-600">{car.model}</p>
            </div>
            <div>
              <p className="font-semibold">Year</p>
              <p className="font-normal text-gray-600">{car.year}</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="font-semibold">Type</p>
            <p
              className={`inline-flex items-center rounded-md ring-1 ring-inset px-2 py-1 text-sm mr-2 font-normal ${typeColorClass} ${typeBorderClass}`}
            >
              {formatCarType(car.type)}
            </p>
          </div>

          <div className="mt-4">
            <p className="font-semibold">Parts</p>
            <ul>
              {car.parts.map((part, index) => (
                <li
                  key={index}
                  className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-sm font-normal text-gray-600 ring-1 ring-inset ring-gray-500/10 mr-2"
                >
                  {part}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <p className="font-semibold">Description:</p>
            <p> {car.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
