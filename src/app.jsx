import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
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
