import Heading from "./components/Heading"
import Navbar from "./components/Navbar"
import Orders from "./components/Orders"


function App() {

  return (
    <>
    <header>
      <Navbar></Navbar>
    </header>

    <section>
      <Heading>Kitchen Room</Heading>
    </section>

    <section>
      <Orders></Orders>
    </section>
    </>
  )
}

export default App
