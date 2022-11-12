import React from "react";
import "./App.scss";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Milestone from "./components/milestone/Milestone";
import Navbar from "./components/navbar/Navbar";
import Packages from "./components/packages/Packages";
import Reviews from "./components/reviews/Reviews";
import Services from "./components/services/Services";
import Whatsapp from "./components/Whatsapp";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./components/loader/Loader";

function App() {
  const [loader, setLoader] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoader(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  React.useEffect(() => {
    AOS.init({
      duration: 1200,
    });

    let scroll = 0;
    window.addEventListener("scroll", function () {
      scroll <= 10 ? scroll++ : AOS.refresh();
    });
  }, []);

  return (
    <div className="App">
      {loader && <Loader />}
      <Navbar />
      <Hero />
      <Milestone />
      <Education />
      <Services />
      <Reviews />
      <Packages />
      <Contact />
      <Footer />
      <Whatsapp />
    </div>
  );
}

export default App;
