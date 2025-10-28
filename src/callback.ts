export type PaymentStatus =
  | "COMPLETED"
  | "WAITING_FOR_CONFIRMATION"
  | "PENDING"
  | "CANCELED";

export type RefundStatus = "FINALIZED" | "CANCELED";

export interface Product {
  name: string;
  unitPrice: string;
  quantity: string;
}

export interface Order {
  orderId: string;
  extOrderId: string;
  orderCreateDate: string;
  notifyUrl: string;
  customerIp: string;
  merchantPosId: string;
  description: string;
  currencyCode: string;
  totalAmount: string;
  status: PaymentStatus;
  products: Product[];
}

export interface Property {
  name: string;
  value: string;
}

interface Refund {
  refundId: string;
  extRefundId: string;
  amount: string;
  currencyCode: string;
  status: RefundStatus;
  statusDateTime: string;
  reason: string;
  reasonDescription: string;
  refundDate: string;
}

export interface StatusUpdate {
  order: Order;
  properties: Property[];
}

export interface RefundUpdate {
  orderId: string;
  extOrderId: string;
  refund: Refund;
}

export type CallbackResponseBody = StatusUpdate | RefundUpdate;
