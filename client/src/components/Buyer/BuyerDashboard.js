import React, { useState, useEffect } from "react";
// import { getOrders, addOrder } from "../api/orders";
import Orders from "./Buyer_pastOrders";
import OrderForm from "./BuyerOrderForm";

const BuyerPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const orders = await getOrders();
  //     setOrders(orders);
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  // const handleAddOrder = async (order) => {
  //   await addOrder(order);
  //   const updatedOrders = await getOrders();
  //   setOrders(updatedOrders);
  // };

  return (
    <div>
      <h2>Past Orders</h2>
      <Orders orders={orders} loading={loading} />
      <h2>New Order Form</h2>
      {/* pass onAddOrder into orderForm as prop */}
      <OrderForm />
      {/* onAddOrder={handleAddOrder} */}
    </div>
  );
};

export default BuyerPage;
