import { CircleCheck } from "lucide-react";
import OrderStatusStepsTable from "./order-status-steps-table";
import OrderTrackingStepper from "./order-tracking-stepper";

export default function OrderTrackingSteps() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Frise chronologique verticale */}
      <OrderTrackingStepper />
      {/* Tableau de statut */}
      <OrderStatusStepsTable />
    </div>
  );
}
