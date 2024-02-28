import LandingPage from "./components/LandingPage";
import Products from "./components/Products";
import style from "./modules/App.module.css";
import Cart from "./components/Cart";
import Footer from "./components/footer";
function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <LandingPage />
      <Products />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
