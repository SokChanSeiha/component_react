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
            <div onClick={() => handleOptionClick(option)} key={option.value}>
                {option.label}
            </div>
        )
    });

    return (
        <div>
            <div onClick={handleClick}>{value?.label || 'Selecting ...'}</div>
            {isOpen && <div>{renderedOption}</div>}
        </div>
    )
  }
  
  export default Dropdown