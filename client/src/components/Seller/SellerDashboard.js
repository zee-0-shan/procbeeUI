import React, { useState } from "react";
import Overview from "./Overview";
import CurrentProducts from "./CurrentProducts";

function SellerPage() {
  const [currentTab, setCurrentTab] = useState("overview");

  const handleTabChange = (event) => {
    setCurrentTab(event.target.value);
  };

  var changeCurrentTab = (v) => {
    setCurrentTab(v);
  };
  return (
    <div>
      <select value={currentTab} onChange={handleTabChange}>
        <option value="overview">Overview</option>
        <option value="currentProducts">Current Products</option>
      </select>
      {currentTab === "overview" && (
        <Overview changeCurrentTab={changeCurrentTab} />
      )}
      {currentTab === "currentProducts" && <CurrentProducts />}
    </div>
  );
}

export default SellerPage;
