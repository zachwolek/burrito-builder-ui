import { useEffect } from "react";
import "./App.css";
import { getOrders } from "../../apiCalls";
import Orders from "../../components/Orders/Orders";
import OrderForm from "../../components/OrderForm/OrderForm";

function App() {
  // [orders, setOrders] = useState(["here is where orders go"])

  // function addOrder(newOrder){
  //   setOrders([...orders, newOrder])
  // }

  useEffect(() => {
    getOrders().catch((err) => console.error("Error fetching:", err));
  });

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm 
        // addOrder={addOrder}
        />
      </header>

      <Orders orders="orders go here" />
    </main>
  );
}

export default App;
