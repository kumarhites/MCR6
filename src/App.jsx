import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RestaurantDetails from "./pages/RestaurantDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/restaurant/:restaurantId"
          element={<RestaurantDetails />}
        />
      </Routes>
    </>
  );
}

export default App;
