import { FaJs } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiFlutter } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiLineVertical } from "react-icons/pi";
import { TbBrandReactNative } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiAndroidstudio } from "react-icons/si";
import { SiXcode } from "react-icons/si";
import { FaAppStore } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Skills = () => {
  return (
    <>
      <div className='grid grid-cols-2'>
        <div></div>
        <div className='border-2 border-[#5f4a95] shadow-2xl shadow-[#3a2c60] rounded-l-[60px] flex justify-start p-6 bg-gradient-to-t from-[#8769da] to-[#4c2ba9]'>
          <h1 className='text-white font-urbanist text-3xl'>Habilidades</h1>
        </div>
      </div>
      <div className='p-6 pt-10'>
        <div className='flex flex-col justify-start gap-4 items-startlg:flex-row lg:grid lg:grid-cols-4 lg:gap-8'>
          <div className='border-2 p-3 rounded-2xl bg-[#18054d] border-[#563d9c]'>
            <div className='flex flex-row justify-center items-center gap-2 lg:flex-row'>
              <h2 className='font-urbanist text-white font-[20px]'>Frontend</h2>
              <PiLineVertical size={30} color='#4c2ba9'/>
              <FaJs size={30} color='white' />
              <FaReact size={30} color='white' />
              <FaHtml5 size={30} color='white' />
              <FaCss3Alt size={30} color='white' />
              <RiTailwindCssFill size={30} color='white' />
              <BiLogoTypescript size={35} color='white'/>
            </div>
          </div>
          <div className='border-2 p-3 rounded-2xl bg-[#18054d] border-[#563d9c] flex justify-start items-start'>
            <div className='flex flex-row justify-center items-center gap-2'>
              <h2 className='font-urbanist text-white font-[20px]'>Banco de Dados</h2>
              <PiLineVertical size={30} color='white' />
              <SiMongodb size={30} color='white' />
              <SiMysql size={30} color='white' />
            </div>
          </div>
          <div className='border-2 p-3 rounded-2xl bg-[#18054d] border-[#563d9c] flex justify-start items-start'>
            <div className='flex flex-row justify-center items-center gap-2'>
              <h2 className='font-urbanist text-white font-[20px]'>Mobile</h2>
              <PiLineVertical size={30} color='white' />
              <SiFlutter size={30} color='white' />
              <TbBrandReactNative size={30} color='white' />
            </div>
          </div>
          <div className='border-2 p-3 rounded-2xl bg-[#18054d] border-[#563d9c] flex justify-start items-start'>
            <div className='flex flex-row justify-center items-center gap-2'>
              <h2 className='font-urbanist text-white font-[20px]'>Versionamento</h2>
              <PiLineVertical size={30} color='white' />
              <FaGithub size={30} color='white' />
              <FaGitAlt size={30} color='white'/>
              <FaGitlab size={30} color='white'/>
            </div>
          </div>
          <div className='border-2 p-3 rounded-2xl bg-[#18054d] border-[#563d9c] flex justify-start items-start'>
            <div className='flex flex-row justify-center items-center gap-2'>
              <h2 className='font-urbanist text-white font-[20px]'>Ferramentas</h2>
              <PiLineVertical size={30} color='white'/>
              <VscVscode size={30} color='white'/>
              <SiAndroidstudio size={30} color='white'/>
              <SiXcode size={30} color='white'/>
            </div>
          </div>
          <div className='border-2 p-3 rounded-2xl bg-[#18054d] border-[#563d9c] flex justify-start items-start'>
            <div className='flex flex-row justify-center items-center gap-2'>
              <h2 className='font-urbanist text-white font-[20px]'>Deploy</h2>
              <PiLineVertical size={30} color='white'/>
              <FaAppStore size={30} color='white'/>
              <IoLogoGooglePlaystore size={30} color='white'/>
            </div>
          </div>






        </div>
      </div>
    </>
  )
}

export default Skills