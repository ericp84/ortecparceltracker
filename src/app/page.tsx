import OrderDetail from "@/components/order-detail/order-detail";
import OrderTrackingSteps from "@/components/order-tracking-steps/order-tracking-steps";

const OrderTrackingPage = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="mx-auto w-full">
        <h1 className="text-2xl font-bold mb-6 text-red-600">
          Détails de la commande
        </h1>

        <div className="mb-6">
          <OrderDetail />
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Suivez l&apos; évolution de votre commande étape par étape
        </h2>
        <OrderTrackingSteps />
      </div>
    </div>
  );
};

export default OrderTrackingPage;
