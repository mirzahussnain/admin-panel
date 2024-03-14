export type OrderItem={
    name:string;
    photo:string;
    price:number;
    quantity:number;
    _id:string;
};

export type Order={
    name:string;
   address:string;
   city:string;
   country:string;
   state:string;
    pinCode:number;
    status:"Processing" | "Shippped" | "Delivered";
    subtotal:number;
    discount:number;
    shippingCharges:number;
    tax:number;
    totalAmount:number;
    orderItems:OrderItem[];
    _id:string;
};

export type Theme="light" | "dark"