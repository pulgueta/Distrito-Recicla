import Navbar from "./components/Navbar"
import About from "./views/About"
import Landing from "./views/Landing"
import Secondary from "./views/Secondary"

const App = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Secondary />
      <About />
    </div>
  )
}

export default App