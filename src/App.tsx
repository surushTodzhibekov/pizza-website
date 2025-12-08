import Menu from "./components/menu";
import About from "./components/about/about";
import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { Events } from "./components/events/events";
import { Footer } from "./components/Footer";

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
