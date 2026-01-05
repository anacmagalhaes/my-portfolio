import React from 'react'
import Button from '../Button'

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <div className=" max-w-6xl mx-auto px-12 py-3 mt-4 flex justify-between items-center border-2 border-[#3a2c60] rounded-[20px] bg-[#18054d] shadow-md shadow-[#372862]">

                <h1 className='text-white text-[22px] font-urbanist'>CAROL MAGALHÃES</h1>
                <nav className='flex flex-row gap-6'>
                    <a href='#about' className='text-white hover:text-[#8769da] hover:underline hover:underline-offset-8 font-urbanist text-[18px]'>
                        About
                    </a>
                    <a href='#skills' className='text-white hover:text-[#8769da] hover:underline hover:underline-offset-8 font-urbanist text-[18px]'>
                        Skills
                    </a>
                    <a href='#projects' className='text-white hover:text-[#8769da] hover:underline hover:underline-offset-8 font-urbanist text-[18px]'>
                        Projects
                    </a>
                    <a href='#contact' className='text-white hover:text-[#8769da] hover:underline hover:underline-offset-8 font-urbanist text-[18px]'>
                        Contact
                    </a>
                </nav>
                <a href='/documents/Curriculum.pdf' download="CV Carol.pdf">
                    <Button text='Download CV' />
                </a>

            </div>
        </header>
    )
}

export default Header