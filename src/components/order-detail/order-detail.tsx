import { Card, CardContent } from "@/components/ui/card";

import OrderAddressesInfos from "./order-addresses-infos";

export default function OrderDetail() {
  return (
    <Card className="shadow-none border-none">
      <CardContent>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <p className="text-sm text-gray-600">
              Référence :{" "}
              <span className="font-medium text-red-600 uppercase">
                545454AAAAAA
              </span>
            </p>
            <p className="text-sm text-gray-600">
              Date :{" "}
              <span className="font-medium text-gray-800">21/10/2024</span>
            </p>
            <p className="text-sm text-gray-600">
              Mode de livraison :{" "}
              <span className="font-medium text-gray-800">
                Colissimo Points de retrait
              </span>
            </p>
            <p className="text-sm text-gray-600">
              Méthode de paiement :{" "}
              <span className="font-medium text-gray-800">
                e-Transactions [Visa]
              </span>
            </p>
          </div>
          <div className="flex flex-row gap-6">
            <OrderAddressesInfos isShippingAddress />
            <OrderAddressesInfos />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
