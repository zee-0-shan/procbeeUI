import React, { useState } from "react";

const OrderForm = ({ onAddOrder }) => {
  const [materialName, setMaterialName] = useState("");
  const [mfi, setMfi] = useState("");
  const [application, setApplication] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const order = {
      materialName,
      mfi,
      application,
      color,
      status: "pending",
    };
    onAddOrder(order);
    setMaterialName("");
    setMfi("");
    setApplication("");
    setColor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="materialName">Material Name:</label>
        <input
          type="text"
          id="materialName"
          value={materialName}
          onChange={(event) => setMaterialName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="mfi">MFI:</label>
        <input
          type="text"
          id="mfi"
          value={mfi}
          onChange={(event) => setMfi(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="application">Application:</label>
        <input
          type="text"
          id="application"
          value={application}
          onChange={(event) => setApplication(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          value={color}
          onChange={(event) => setColor(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default OrderForm;
