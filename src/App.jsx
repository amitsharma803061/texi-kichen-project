import { Suspense } from "react";
import Heading from "./components/Heading"
import Navbar from "./components/Navbar"
import OrdersJson from "./components/OrdersJson";

const loadOrders = () => fetch("/orders.json")
  .then((res) => res.json())

function App() {
  const ordersPromise = loadOrders();
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <section>
        <Heading>Kitchen Room</Heading>
      </section>

      <section>
        <Suspense fallback={"loading................."}>
          <OrdersJson promise={ordersPromise}></OrdersJson>
        </Suspense>
      </section>
    </>
  )
}

export default App
