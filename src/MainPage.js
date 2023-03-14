import { useContext } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import BuyTokens from "./components/BuyTokens";
import Roadmap from "./components/Roadmap";
import SocialMedia from "./components/SocialMedia";
import Register from "./components/Register";
import Footer from "./components/Footer";
import { GlobalContext } from "./components/GlobalContext";

function MainPage() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Register />
      <BuyTokens />
      <Tokenomics />
      <Roadmap />
      <SocialMedia />
      <Footer />
    </>
  );
}

export default MainPage;
