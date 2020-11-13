interface IOrder {
  id: number;
  shop_name: string;
  shop_img_url: string;
  status: 'waiting' | 'trying' | 'canceled' | 'concluded';
  date: Date;
  freight: number;
}
