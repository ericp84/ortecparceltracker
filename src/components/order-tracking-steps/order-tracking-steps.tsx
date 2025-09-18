import OrderStatusStepsTable from "./order-status-steps-table";
import { OrderTrackingStepper } from "./order-tracking-stepper";
const steps = [
  {
    title: "En attente de traitement",
  },
  {
    title: "En cours de préparation",
  },
  { title: "Expédiée" },
];
export default function OrderTrackingSteps() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-96">
      {/* Frise chronologique verticale */}
      <OrderTrackingStepper steps={steps} currentStep={1} />
      {/* Tableau de statut */}
      <OrderStatusStepsTable />
    </div>
  );
}
