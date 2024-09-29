import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems.jsx";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage.jsx";

function App() {
  //let foodItems = [];

  let foodItems = ["Dal", "Green v", "Saaag", "Chana", "Kadhi"];

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}

export default App;
