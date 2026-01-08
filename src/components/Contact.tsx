import Button from './Button'

const Contact = () => {
  return (
    <div>
      <div className='grid grid-cols-2 gap-2'>
        <div></div>
        <div className='border-2 border-[#684aba] shadow-2xl shadow-[#3a2c60] rounded-l-[60px] flex justify-start p-6 bg-gradient-to-b from-[#4c2ba9] to-[#8769da] '>
          <h1 className='text-white font-urbanist text-3xl'>Contato</h1>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 m-8 mt-15'>
        <div className=''>
          <div className='bg-[#5837b3] border-2 border-[#5837b3] flex justify-center items-center rounded-[20px] p-1 mb-4'>
            <h2 className='font-urbanist text-white text-[20px]'>Carol Magalhães</h2>
          </div>
          <h3 className='font-urbanist text-white text-center'>Sempre aberta a novos desafios. Se você tem uma ideia e quer colocada em prática, entre em contato comigo. </h3>
          <div className='flex justify-center items-center m-4'>
          
          </div>

        </div>
        <div className='flex flex-col'>
          <div className='bg-[#5837b3] border-2 border-[#5837b3] flex justify-center items-center rounded-[20px] p-1 mb-4'>
            <h2 className='font-urbanist text-white text-[20px]'>Contato</h2>
          </div>
          <a href='tel:+5538999598722' className='font-urbanist text-white underline underline-offset-2'>+55 38 9 99598722</a>
          <a href='mailto:anacarolinasoaresmagalhaes@gmail.com' className='font-urbanist text-white underline underline-offset-2'>anacarolinasoaresmagalhaes@gmail.com</a>
        </div>
        <div className=''>
          <div className='bg-[#5837b3] border-2 border-[#5837b3] flex justify-center items-center rounded-[20px] p-1 mb-4'>
            <h2 className='font-urbanist text-white text-[20px]'>Fale Comigo</h2>
          </div>
          <a href='mailto:anacarolinasoaresmagalhaes@gmail.com' className='flex justify-center items-center'>
            <Button text="Enviar E-mail" />
          </a>
        </div>
       
      </div>
    </div>
  )
}

export default Contact