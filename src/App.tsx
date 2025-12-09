import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Events } from "./components/events/events";
import Menu from "./components/menu";
import About from "./components/about/about";
import { Footer } from "./components/footer";
import { CartProvider } from "./contexts/cart-context";

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-dark">
        <Header />
        <main>
          <Hero />
          <Events />
          <Menu />
          <About />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
