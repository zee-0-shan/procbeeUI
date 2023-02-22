import React from "react";

const Orders = ({ orders, loading }) => {
  if (loading) {
    return <p>Loading orders...</p>;
  }

  if (orders.length === 0) {
    return <p>No orders found.</p>;
  }

  return (
    <div>
      {orders.map((order) => (
        <div key={order.id}>
          <p>Material Name: {order.materialName}</p>
          <p>Variant: {order.variant}</p>
          <p>Order Date: {order.orderDate}</p>
          <p>Status: {order.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Orders;
