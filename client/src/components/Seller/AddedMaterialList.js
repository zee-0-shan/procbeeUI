import React from "react";
import "./AddedMaterialList.css";

export default function AddedMaterialList(props) {
  const { addedMaterial } = props;
  if (addedMaterial.length === 0) {
    return <div>Please add a material to see the preview</div>;
  }
  return (
    <div className="AddedMaterialList">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Variant</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {addedMaterial.map((material) => (
            <tr key={material.id}>
              <td>{material.materialName}</td>
              <td>{material.variant}</td>
              <td>{material.price}</td>
              <td>{material.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
