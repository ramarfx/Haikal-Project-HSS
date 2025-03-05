
import Header from "./components/Navbar"
import AboutUs from "./page/About"
import Contact from "./page/Contact"

import Founder from "./page/Founder"
import Jumbotron from "./page/Jumbotron"
import VissionMission from "./page/VisionMission"
import Underwater from "./page/Underwater"

function App() {

  return (
    <main className=" text-white">
      <Header />
      <Jumbotron />
      <AboutUs />
      <Founder />
      <VissionMission />
      <Underwater />
      <Contact />
    </main>
  )
}

export default App
