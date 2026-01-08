const About = () => {
  return (
    <div>
      <div className='grid grid-cols-2 gap-2'>
        <div className='border-2 border-[#5837b3] shadow-2xl shadow-[#3a2c60] rounded-r-[60px] flex justify-end p-6 bg-gradient-to-t from-[#8769da] to-[#4c2ba9]'>
          <h1 className='text-white font-urbanist text-3xl'>Sobre Mim</h1>
        </div>
      </div>
      <div className='grid grid-cols-1 justify-center items-center m-5 gap-6 lg:justify-start lg:grid-cols-2 lg:gap-6'>
        <div>
          <h2 className='font-urbanist text-white text-[18px] lg:text-[20px]'>Olá! <br></br>
            Meu nome é <span className='text-white font-bold'> Carol Magalhães. <br></br></span>
            Atuo com <span className='text-white font-bold'>desenvolvimento de software</span>, com foco em aplicações <span className='text-white font-bold'>mobile e web</span>. Tenho experiência
            prática no desenvolvimento de aplicativos utilizados em eventos acadêmicos e científicos, trabalhando com <span className='text-white font-bold'>consumo de APIs</span>,
            <span className='text-white font-bold'>autenticação</span> e <span className='text-white font-bold'>integração de sistemas.</span> <br></br>
            Minha atuação é voltada principalmente para <span className='text-white font-bold'>frontend e mobile</span>. Busco desenvolver aplicações que sejam fáceis de entender, manter e evoluir. <br></br>
          </h2>
        </div>
        <div className='flex justify-center items-center'>
          <img src='src/assets/avatar.jpg' className='w-90 rounded-[200px] border-2 border-[#b9a0ff] shadow-2xl shadow-black'></img>
        </div>
      </div>
    </div>
  )
}

export default About