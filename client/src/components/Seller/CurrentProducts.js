import React, { useState } from "react";
import AddedMaterialList from "./AddedMaterialList";
// import axios from "axios";

function CurrentProducts() {
  const [materialName, setMaterialName] = useState("");
  const [variant, setVariant] = useState("");
  const [batch, setBatch] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [addedMaterial, setAddedMaterial] = useState([
    {
      materialName: "pp",
      variant: "v1",
      batch: "22022023",
      stock: "100",
      price: "102",
    },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMaterial = {
      materialName,
      variant,
      batch,
      stock,
      price,
    };
    // axios
    //   .post("/api/materials", newMaterial)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    addedMaterial.push(newMaterial);
    setMaterialName("");
    setVariant("");
    setBatch("");
    setStock("");
    setPrice("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Material Name:
          <input
            type="text"
            value={materialName}
            onChange={(e) => setMaterialName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Variant:
          <input
            type="text"
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Batch:
          <input
            type="text"
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Stock:
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Material</button>
      </form>
      <div>
        <AddedMaterialList addedMaterial={addedMaterial} />
      </div>
    </div>
  );
}

export default CurrentProducts;
