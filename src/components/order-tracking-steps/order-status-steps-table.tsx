import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function OrderStatusStepsTable() {
  return (
    <div className="lg:col-span-2">
      <Card className="p-0 rounded-md">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Date</TableHead>
                <TableHead>Statut</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="even:bg-muted/50">
                <TableCell className="font-medium">21/10/2024</TableCell>
                <TableCell>Paiement accepté</TableCell>
              </TableRow>
              <TableRow className="text-red-600 even:bg-muted/100">
                <TableCell className="font-medium rounded-bl-md">
                  22/10/2024
                </TableCell>
                <TableCell className="rounded-br-md">
                  Expédition sous 24 à 72h
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
