import React, { useState, useEffect } from "react";
// import axios from "axios";

function Overview(props) {
  const [materials, setMaterials] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  //   useEffect(() => {
  //     // Load materials from the database
  //     axios
  //       .get("/api/materials")
  //       .then((response) => {
  //         setMaterials(response.data);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }, []);

  const filteredMaterials = materials.filter((material) =>
    material.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredMaterials.length === 0) {
    return (
      <div>
        <p>No Products</p>
        <button onClick={() => props.changeCurrentTab("currentProducts")}>
          Go to Current Products/Stock to add a new product
        </button>
      </div>
    );
  }

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Filter materials..."
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredMaterials.map((material) => (
            <tr key={material.id}>
              <td>{material.name}</td>
              <td>{material.quantity}</td>
              <td>{material.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Overview;
