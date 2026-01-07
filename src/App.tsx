import About from "./components/About.tsx"
import Contact from "./components/Contact.tsx"
import Header from "./components/Header.tsx"
import Projects from "./components/Projects.tsx"
import Skills from "./components/Skills.tsx"


function App() {


  return (
    <div className="bg-gradient-to-b from-[#2c166b] to-[#8769da] scroll-smooth">
      <Header />
      <main className="pt-auto">
        <div className="overflow-x-hidden pt-25">
          <section id="Sobre Mim" className="py-8 scroll-mt-32">
            <About />
          </section>

          <section id="Habilidades" className="scroll-mt-32">
            <Skills />
          </section>

          <section id="Projetos" className="scroll-mt-32">
            <Projects />
          </section>

          <section id="Contato" className="scroll-mt-32">
            <Contact />
          </section>
        </div>
      </main>


    </div>
  )
}

export default App
