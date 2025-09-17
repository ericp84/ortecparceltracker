export default function OrderAddressesInfos({ isShippingAddress = false }) {
  return (
    <div className="text-sm">
      <div>
        <h3 className="font-semibold text-lg text-gray-800 mb-2">
          {isShippingAddress
            ? "Adresse de livraison"
            : "Adresse de facturation"}
        </h3>
        <address className="not-italic text-gray-600">
          {isShippingAddress ? "Bruno VAYSSE" : "Bruno VIVYSE"}
          <br />
          {isShippingAddress ? "OENODEPOT" : ""}
          <br />
          {isShippingAddress
            ? "30 RUE FREDERIC JOLIOT"
            : "595 Avenue de la Bagatelle"}
          <br />
          {isShippingAddress
            ? "13290 AIX EN PROVENCE"
            : "13090 AIX EN PROVENCE"}
          <br />
          {isShippingAddress
            ? "France Métropolitaine (hors Corse)"
            : "France Métropolitaine (hors Corse)"}
          <br />
          {isShippingAddress ? "0622664841" : "0622664841"}
          <br />
          {isShippingAddress ? "" : "bouchwayseu@cortec.fr"}
        </address>
      </div>
    </div>
  );
}
