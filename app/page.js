import "./styles/global.css"
import Navbar from "./(component)/Navbar";
import Footer from "./(component)/Footer";
import App from "./(page)/App";
// import { useScrollAnimations } from "./hooks/useScrollAnimations"
// import { useSmoothScroll } from "./hooks/useSmoothScroll"

export default function Home() {
      // Initialize hooks
  // useSmoothScroll();
  // useScrollAnimations();
  return (
    <div className="app">
      <Navbar/>
      <App/>
      <Footer/>
    </div>
  );
}
