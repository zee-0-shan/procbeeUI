import "./App.css";
import BuyerPage from "./components/Buyer/BuyerDashboard";
import LoginPage from "./components/Login/Login.js";
import SellerPage from "./components/Seller/SellerDashboard";
import UserSelect from "./components/User/User";

function App() {
  return (
    <div className="App">
      {/* <LoginPage /> */}
      {/* <UserSelect /> */}
      {/* <BuyerPage /> */}
      <SellerPage />
    </div>
  );
}

export default App;
