import { Suspense } from "react";
import Heading from "./components/Heading"
import Navbar from "./components/Navbar"
import OrdersJson from "./components/OrdersJson";
import { ToastContainer } from "react-toastify";
import LastCard from "./components/LastCard";

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

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <LastCard></LastCard>
    </>
  )
}

export default App
