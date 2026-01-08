import About from "./components/about/About"
import Contact from "./components/contacts/Contact"
import Footer from "./components/Footer.tsx"
import Header from "./components/header/Header"
import Projects from "./components/projects/Projects.tsx"
import Skills from "./components/skills/Skills"


function App() {


  return (
    <div className="bg-gradient-to-b from-[#2c166b] to-[#8769da] scroll-smooth">
      <Header />
      <main className="pt-auto">
        <div className="overflow-x-hidden">
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
      </main>
      <Footer />


    </div>
  )
}

export default App
