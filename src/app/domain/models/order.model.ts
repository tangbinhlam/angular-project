export default interface Order {
  orderDate: Date;
  orderNumber: number;
  total: number;
  description: string;
  isChecked: boolean;
}
