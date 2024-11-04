import Banner from "./components/Banner";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import VerticalTimeline from "./components/Timeline";
export default function App() {
  return (
    <>
      <Navbar />
    
      <Main />
      <Banner/>
      <VerticalTimeline />
      <Card />
      {/* <Testimonial />
      <Blog /> */}

      <Footer />
    </>
  );
}
