import About from "./components/about/About"
import Contact from "./components/contacts/Contact"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Projects from "./components/projects/Projects.tsx"
import Skills from "./components/skills/Skills"


function App() {


  return (
    <div className="bg-gradient-to-b from-[#2c166b] to-[#8769da] scroll-smooth">
      <Header />
      <section id="home" className="py-32 scroll-mt-32">
        <Home />
      </section>
      <section id="about" className="py-32 scroll-mt-32">
        <About />
      </section>
      <section id="skills" className="py-32 scroll-mt-32">
        <Skills />
      </section>
      <section id="projects" className="py-32 scroll-mt-32">
        <Projects />
      </section>
      <section id="contact" className="py-32 scroll-mt-32">
        <Contact />
      </section>
    </div>
  )
}

export default App
