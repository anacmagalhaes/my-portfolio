import React from 'react'

type ButtonProps = {
    text: string,
    onClick?: () => void,
    className?: string;
}

const Button = ({ text, onClick, className =""}: ButtonProps) => {
  return (
    <button onClick={onClick} className={`bg-[#2b1c56] border-2 border-[#3a2c60] rounded-[20px] p-2  text-white text-[16px] font-urbanist cursor-pointer hover:border-[#8769da] hover:text-[#8769da] ${className}`}>
        {text}
    </button>

  )
}

export default Button;