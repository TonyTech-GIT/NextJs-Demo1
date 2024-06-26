
const Button = ({ label, bgColor, borderColor, textColor, funcHover }) => {
    return (
        <button className={`transition duration-200 ease-in-out  py-2 px-3 flex justify-center border 
        
            ${bgColor ? bgColor : 'bg-black'} ${borderColor && borderColor} rounded-full ${textColor ? textColor : 'text-[#ffffff]'} 

            ${funcHover ? 'bg-gradient hover:bg-yellow-400 hover:text-white ' : ''} `
        }>
            {label}
        </button>
    )
}

export default Button
