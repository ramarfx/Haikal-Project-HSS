import AboutUs from "./page/About"
import Founder from "./page/Founder"
import Jumbotron from "./page/Jumbotron"
import VissionMission from "./page/VisionMission"

function App() {

  return (
    <main className="bg-blue-900 text-white">
      <Jumbotron />
      <AboutUs />
      <Founder />
      <VissionMission />
    </main>
  )
}

export default App
