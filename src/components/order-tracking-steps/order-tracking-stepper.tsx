import { CircleCheck } from "lucide-react";

export default function OrderTrackingStepper() {
  return (
    <div className="lg:col-span-1">
      <div className="flex flex-col items-center">
        {/* Étape 1: En attente de traitement */}
        <div className="flex items-center w-full">
          <div className="z-10 bg-red-700 rounded-full p-1.5">
            <CircleCheck className="text-white w-4 h-4" />
          </div>
          <div className="flex-1 text-center px-2">
            <p className="font-medium text-gray-800">
              En attente de traitement
            </p>
          </div>
        </div>
        <div className="h-16 w-0.5 bg-red-700 -mt-1" />

        {/* Étape 2: En cours de préparation */}
        <div className="flex items-center w-full">
          <div className="z-10 bg-red-700 rounded-full p-1.5">
            <CircleCheck className="text-white w-4 h-4" />
          </div>
          <div className="flex-1 text-center px-2">
            <p className="font-medium text-gray-800">En cours de préparation</p>
          </div>
        </div>
        <div className="h-16 w-0.5 bg-gray-300 -mt-1" />

        {/* Étape 3: Expédiée */}
        <div className="flex items-center w-full">
          <div className="z-10 bg-white border-2 border-gray-300 rounded-full p-2"></div>
          <div className="flex-1 text-center px-2">
            <p className="font-medium text-gray-500">Expédiée</p>
          </div>
        </div>
      </div>
    </div>
  );
}
