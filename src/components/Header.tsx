import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import Button from './Button'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4">
      <div className="max-w-6xl mx-auto mt-4 border-2 border-[#3a2c60] rounded-[20px] bg-[#18054d] shadow-md shadow-[#372862]">

        <div className="flex items-center justify-between px-4 py-3 sm:px-8">
          <h1 className="text-white text-[18px] sm:text-[22px] font-urbanist">
            CAROL MAGALHÃES
          </h1>

          <nav className="hidden md:flex gap-6">
            {['Sobre Mim', 'Habilidades', 'Projetos', 'Contato'].map(item => (
              <a
                key={item}
                href={`#${item}`}
                className="text-white hover:text-[#8769da] hover:underline hover:underline-offset-8 font-urbanist text-[18px]"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href="/documents/Curriculum.pdf" download="CV Carol.pdf">
              <Button text="Download CV" />
            </a>
          </div>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden flex flex-col gap-4 px-6 pb-6">
            {['about', 'skills', 'projects', 'contact'].map(item => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setOpen(false)}
                className="text-white text-[18px] font-urbanist hover:text-[#8769da]"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}

            <a href="/documents/Curriculum.pdf" download="CV Carol.pdf">
              <Button text="Download CV" />
            </a>
          </div>
        )}

      </div>
    </header>
  )
}

export default Header
