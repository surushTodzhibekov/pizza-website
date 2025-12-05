import Header from "./components/Header";
import Hero from "./components/Hero";
import { Events } from "./components/events/Events";
import Menu from "./components/menu";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Header />
      <main>
        <Hero />
        <Menu />
        <Events />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
