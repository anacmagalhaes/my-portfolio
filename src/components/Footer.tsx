import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="border-t border-[#3a2c60] bg-[#18054d] shadow-md shadow-[#372862]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between items-center gap-6">

        {/* Texto */}
        <p className="text-white font-urbanist text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Carol Magalhães. Todos os direitos reservados.
        </p>

        {/* Navegação */}
        <nav className="flex gap-6">
          <a href="#Sobre Mim" className="text-white hover:text-[#8769da] transition">
            Sobre Mim
          </a>
          <a href="#Habilidades" className="text-white hover:text-[#8769da] transition">
            Habilidades
          </a>
          <a href="#Projetos" className="text-white hover:text-[#8769da] transition">
            Projetos
          </a>
          <a href="#Contato" className="text-white hover:text-[#8769da] transition">
            Contato
          </a>
        </nav>

        <div className="flex gap-4">
          <a
            href="https://github.com/anacmagalhaes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8769da] hover:text-white transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/anacmagalhaees/"
            target="_blank"
            className="text-[#8769da] hover:text-white transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://wa.me/5538999598722?text=Olá,%20Carol!%20Queria%20conversar%20sobre%20um%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8769da] hover:text-white transition"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
