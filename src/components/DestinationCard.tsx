import IDestination from "../model/IDestination";

interface IDestinationCardProps {
  destination: IDestination;
}

export default function DestinationCard({
  destination,
}: IDestinationCardProps) {
  return (
    <div className="flex items-center overflow-hidden rounded-lg bg-white shadow-lg">
      <img
        className="h-32 w-32 flex-shrink-0"
        src={destination.imageUrl}
        alt={destination.imageAlt}
      />
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {destination.city}
        </h3>
        <p className="text-gray-600">
          ${destination.averagePrice} / night average
        </p>
        <div className="mt-4">
          <a
            href="#"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Explore {destination.propertyCount} properties
          </a>
        </div>
      </div>
    </div>
  );
}
