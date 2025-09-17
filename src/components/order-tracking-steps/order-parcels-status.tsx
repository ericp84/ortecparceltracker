import { Card, CardContent } from "@/components/ui/card";

export default function OrderParcelsStatus() {
  return (
    <div className="mt-6">
      <Card>
        <CardContent className="p-4 flex items-center gap-4">
          <p className="font-bold text-gray-800">1 colis en statut</p>
          <span className="bg-yellow-200 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
            en préparation
          </span>
        </CardContent>
      </Card>
    </div>
  );
}
