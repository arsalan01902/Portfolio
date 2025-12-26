import { Navbar } from "./components/Navbar";
import { Home } from "./section/Home";
import { About } from "./section/About";
import { Skills } from "./section/Skills";
import { Projects } from "./section/Projects";
import { Contact } from "./section/Contact";
import { Footer } from "./section/Footer";
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <div className="min-h-screen text-white bg-gradient-to-r from-purple-800 via-fuchsia-900 to-fuchsia-950">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
      <Analytics></Analytics>
    </div>
  );
}

export default App;
