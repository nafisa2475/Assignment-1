import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <section id="home" className="home">
        <h1>Hello, I'm Nafisa Parvin</h1>
        <h2>BCA Student | Aspiring Software Developer</h2>
        <p>Welcome to my personal portfolio website!</p>
      </section>

      <About />

      <Education />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </>
  );
}

export default App;