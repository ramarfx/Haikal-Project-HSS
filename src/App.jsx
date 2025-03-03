
import Header from "./components/Navbar"
import AboutUs from "./page/About"
import Contact from "./page/Contact.Jsx"

import Founder from "./page/Founder"
import Jumbotron from "./page/Jumbotron"
import VissionMission from "./page/VisionMission"
import Underwater from "./page/Underwater"

function App() {

  return (
    <main className="bg-blue-900 text-white">
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
