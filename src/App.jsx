import "./App.scss";
import Header from "./sections/Header/Header";
import Section_2 from "./sections/Section_2/Section_2";
import Hero from "./sections/Hero/Hero";
import Section_3 from "./sections/Section_3/Section_3";
import Section_4 from "./sections/Section_4/Section_4";
import Section_5 from "./sections/Section_5/Section_5";
import Section_6 from "./sections/Section_6/Section_6";
import Section_7 from "./sections/Section_7/Section_7";
import Footer from "./sections/Footer/Footer";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <Section_6 />
      <Section_7 />
      <Footer />
    </>
  );
}

export default App;
