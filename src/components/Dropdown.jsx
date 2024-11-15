import { useState } from "react"

function Dropdown({options, value, onChange}) {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    
    const handleOptionClick = (optionClicked) => {
        // CLOSR DROPDOWN
        setIsOpen(false);
        // WHAT OPTION DID THE USER CLICK ON?
        onChange(optionClicked);
    }

    const renderedOption = options.map((option) => {
        return (
            <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>
                {option.label}
            </div>
        )
    });

    return (
        <div className="w-48 relative">
            <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full" onClick={handleClick}>
                {value?.label || 'Selecting ...'}
            </div>
            {isOpen &&(
                <div className="absolute top-full border rounded p-3 shadow bg-white w-full">{renderedOption}</div>
            )}
        </div>
    )
  }
  
  export default Dropdown