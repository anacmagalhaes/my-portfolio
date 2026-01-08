import { Contact } from "lucide-react"
import About from "./components/About"
import Header from "./components/Header"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer.tsx"


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
      <Footer />


    </div>
  )
}

export default App
