import AboutUs from "./page/About"
import Founder from "./page/Founder"
import Jumbotron from "./page/Jumbotron"
import VissionMission from "./page/VisionMission"
import Underwater from "./page/Underwater"

function App() {

  return (
    <main className="bg-blue-900 text-white">
      <Jumbotron />
      <AboutUs />
      <Founder />
      <VissionMission />
      <Underwater />
    </main>
  )
}

export default App
