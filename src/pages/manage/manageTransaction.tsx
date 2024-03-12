import { useState } from "react";
import { AdminSideBar } from "../../components";
import { Order, OrderItem } from "../../types";
import { Link } from "react-router-dom";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fD88MHxzZWFyY2h8mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const orderItems: OrderItem[] = [
  {
    name: "Puma Shoes",
    photo: img,
    _id: "asasfasfsa",
    quantity: 4,
    price: 2000,
  },
];
const ManageTransaction = () => {
  const [order, setOrder] = useState<Order>({
    name: "Abhishek",
    address: "77 Black Street",
    city: "Islamabad",
    state: "Islamabad",
    country: "Pakistan",
    pinCode: 245212,
    status: "Processing",
    subtotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    totalAmount: 4000 + 200 + 0 - 1200,
    orderItems,
    _id: "assasdasfsa",
  });

  const {
    name,
    address,
    city,
    state,
    country,
    pinCode,
    subtotal,
    discount,
    tax,
    shippingCharges,
    totalAmount,
    status,
  } = order;


  const updateHandler=()=>{
    setOrder(prev=>({
      ...prev,
      status:prev.status==="Processing"?"Shippped":"Delivered",
    }))
  }
  return (
    <div className="adminContainer">
      <AdminSideBar />
      <main className="management-box">
        <section style={{
          padding:"2rem",
        }}>
          <h2>Order Items</h2>

          {order.orderItems.map((i) => (
            <OrderItemCard
              name={i.name}
              photo={i.photo}
              _id={i._id}
              quantity={i.quantity}
              price={i.price}
            />
          ))}
        </section>

        <article className="shipping-info-card">
          <h1>Order Info</h1>
          <h5>User Details</h5>
          <p>Name: {name}</p>
          <p>
            Address: {`${address}, ${city}, ${state}, ${country} ${pinCode}`}
          </p>
          <h5>Price Details</h5>
          <p>Subtotal: ${subtotal}</p>
          <p>Shipping Charges: ${shippingCharges}</p>
          <p>Tax: ${tax}</p>
          <p>Discount: {discount}</p>
          <p>Total: ${totalAmount}</p>

          <h5>Status Details</h5>
          <p>
            Status:{" "}
            <span
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Shippped"
                  ? "green"
                  : "red"
              }
            >
              {status}
            </span>
          </p>

          <button onClick={updateHandler}>Update Order Status</button>
        </article>
      </main>
    </div>
  );
};

const OrderItemCard = ({ name, photo, price, quantity, _id }: OrderItem) => (
  <div className="transaction-product-card">
    <img src={photo} alt={name} />
    <Link to={`/products/${_id}`}>{name}</Link>
    <span>
      ${price} X {quantity} = ${price * quantity}
    </span>
  </div>
);
export default ManageTransaction;
