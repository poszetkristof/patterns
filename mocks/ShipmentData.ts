export const MOCK_SHIPMENT_AIR_EAST = {
  fromAddress: 'Atlanta',
  fromZipCode: null,
  shipmentId: 0,
  toAddress: 'San Diego',
  toZipCode: 78900,
  weight: 10
};

export const MOCK_SHIPMENT_CHICAGO = {
  fromAddress: 'Chicago',
  fromZipCode: 45600,
  shipmentId: 0,
  toAddress: 'San Diego',
  toZipCode: 78900,
  weight: 30
};

export const MOCK_SHIPMENT_PACIFIC = {
  fromAddress: 'San Diego',
  fromZipCode: 89010,
  shipmentId: 987230,
  toAddress: 'Chicago',
  toZipCode: 45600,
  weight: 161
};

export const MOCK_SHIPMENT_PACIFIC_SPECIAL = {
  fromAddress: 'San Diego',
  fromZipCode: 89010,
  shipmentId: 987230,
  toAddress: 'Chicago',
  toZipCode: 45600,
  weight: 200,
  isFragile: true,
  isLeaveProhibitedIfNotAtHome: true,
  isReturnReceiptRequested: true
};
