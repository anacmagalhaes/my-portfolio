import React from 'react'
import Button from '../Button'

const Contact = () => {
  return (
    <>
      <div className='grid grid-cols-2 gap-2'>
        <div></div>
        <div className='-mr-32 border-2 border-[#684aba] shadow-2xl shadow-[#3a2c60] rounded-l-[60px] flex justify-start p-6 bg-gradient-to-b from-[#4c2ba9] to-[#8769da] '>
          <h1 className='text-white font-urbanist text-3xl'>Contact</h1>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-10 m-8 justify-center'>
        <div className=''>
          <h2 className='font-urbanist text-white text-[20px]'>Contato</h2>
        </div>
        <div className='flex flex-col'>
          <h2 className='font-urbanist text-white text-[20px] pb-2'>Contato</h2>
          <a href='tel:+5538999598722' className='font-urbanist text-white underline underline-offset-2'>+55 38 9 99598722</a>
          <a href='mailto:anacarolinasoaresmagalhaes@gmail.com' className='font-urbanist text-white underline underline-offset-2'>anacarolinasoaresmagalhaes@gmail.com</a>
        </div>
        <div className=''>
          <h2 className='font-urbanist text-white text-[20px] pb-2'>Fale Comigo</h2>
          <a href='mailto:anacarolinasoaresmagalhaes@gmail.com'>
            <Button text="Enviar E-mail" />
          </a>
        </div>
        <div className=''>
          <h2 className='font-urbanist text-white text-[20px]'>Contato</h2>
        </div>
      </div>
    </>
  )
}

export default Contact