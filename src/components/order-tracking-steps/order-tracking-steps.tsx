import OrderStatusStepsTable from "./order-status-steps-table";
import { OrderTrackingStepper } from "./order-tracking-stepper";

const steps = [
  {
    title: "Evènements QIB",
    events: [
      {
        title: "Commande reçue",
      },
      {
        title: "En cours de préparation",
      },
      {
        title: "En attente d'enlèvement",
      },
      {
        title: "Expédiée ou pris en charge par transporteur",
      },
    ],
  },
  {
    title: "Evènements transporteur",
    events: [
      {
        title: "Arrivée au centre de distribution",
      },
      {
        title: "Départ du centre de distribution",
      },
      {
        title: "Arrivée en agence locale distributeur",
      },
      {
        title: "Départ de l'agence locale",
      },
      {
        title: "Livrée",
      },
    ],
  },
];
export default function OrderTrackingSteps() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-96">
      <OrderTrackingStepper steps={steps} currentStep={1} />
      <OrderStatusStepsTable />
    </div>
  );
}
