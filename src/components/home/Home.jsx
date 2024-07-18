import MySkills from "../Myskills";
import Hero from '../../sections/Hero/Hero';
import AboutMe from "../Aboutme";
import ContactMe from "../Contact";
// import Footer from "../Footer";
import MyPortfolio from "../Projects";
// import Testimonial from "../Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      <ContactMe />
      {/* <Testimonial />
      <Footer />
     */}
    </>
  );
}