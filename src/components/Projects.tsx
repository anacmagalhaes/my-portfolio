import React from 'react'
import Button from './Button'
import { FaFlutter } from "react-icons/fa6";
import { FaReact, FaGooglePlay, FaApple, FaFolder, FaGithub } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { Tags } from './Tags';

const Projects = () => {
  return (
    <>
      <div className='grid grid-cols-2 gap-2'>
        <div className='-ml-32 border-2 border-[#5c3eac] shadow-2xl shadow-[#3a2c60] rounded-r-[60px] flex justify-end p-6 bg-gradient-to-b from-[#8769da] to-[#4c2ba9]'>
          <h1 className='text-white font-urbanist text-3xl'>Projects</h1>
        </div>
      </div>
      <div className='p-6 pt-10'>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className='border-2 bg-[#18054d] border-[#563d9c] p-2 rounded-2xl shadow-2xl shadow-[#372862] '>
            <div className='flex justify-center items-center'>
              <img src='src/assets/screens.png' className='h-45 '></img>
            </div>
            <div className='flex justify-center items-center flex-col gap-3'>
              <h1 className='font-urbanist text-[#8769da] text-[18px] font-bold'>Aplicativo ENMC & ECTM</h1>
              <div className='flex flex-wrap'>
                <Tags label='Flutter' icon={FaFlutter} />
              </div>
              <div className="flex gap-4 justify-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.lica.enmc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl border bg-[#2b1c56] border-[#3a2c60] text-white cursor-pointer hover:border-[#8769da] hover:text-[#8769da]"
                >
                  <FaGooglePlay size={18} />
                  <span className="text-sm font-urbanist">Baixar na Play Store</span>
                </a>

                <a
                  href="https://apps.apple.com/br/app/enmc-ectm/id6753355203"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl border bg-[#2b1c56] border-[#3a2c60] text-white cursor-pointer hover:border-[#8769da] hover:text-[#8769da]"
                >
                  <FaApple size={18} />
                  <span className="text-sm font-urbanist">Baixar na App Store</span>
                </a>
              </div>
            </div>
          </div>
          <div className='border-2 bg-[#18054d] border-[#563d9c] p-2 rounded-2xl shadow-2xl shadow-[#372862]'>
            <img src='src/assets/my-portfolio.png' className='rounded-[10px]'></img>
            <div className='flex justify-center items-center flex-col gap-3'>
              <h1 className='font-urbanist text-[#8769da] text-[18px] font-bold'>Portfólio</h1>
              <div className='flex flex-wrap gap-2'>
                <Tags label='React' icon={FaReact} />
                 <Tags label='TailwindCss' icon={RiTailwindCssFill} />
                  <Tags label='TS' icon={BiLogoTypescript} />
              </div>
              <div className="flex gap-4 justify-center">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-6 rounded-xl border bg-[#2b1c56] border-[#3a2c60] text-white cursor-pointer hover:border-[#8769da] hover:text-[#8769da]"
                >
                  <FaFolder size={18} />
                  <span className="text-sm font-urbanist">Ver Projeto</span>
                </a>

                <a
                  href="https://github.com/anacmagalhaes/my-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl border bg-[#2b1c56] border-[#3a2c60] text-white cursor-pointer hover:border-[#8769da] hover:text-[#8769da]"
                >
                  <FaGithub size={18} />
                  <span className="text-sm font-urbanist">Ver Código</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects