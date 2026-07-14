import Background from "./components/Background";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Competencies from "./components/Competencies";
import Studies from "./components/Studies";
import EducationSection from "./components/EducationSection";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen w-full font-body text-ink">
      <Background />
      <Nav />
      <Hero />
      <About />
      <ExperienceTimeline />
      <Competencies />
      <Studies />
      <EducationSection />
      <Contact />
    </div>
  );
}
