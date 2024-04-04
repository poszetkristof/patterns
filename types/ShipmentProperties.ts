export type ShipmentProperties = {
  shipmentId: number;
  weight: number;
  fromAddress: string;
  fromZipCode: number;
  toAddress: string;
  toZipCode: number;
  isFragile?: boolean;
  isLeaveProhibitedIfNotAtHome?: boolean;
  isReturnReceiptRequested?: boolean;
}
