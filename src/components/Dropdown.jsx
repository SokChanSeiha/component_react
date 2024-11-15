import { useState } from "react"
import Panel from "./Panel";
import { FaChevronCircleDown } from "react-icons/fa";

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
            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                {value?.label || 'Selecting ...'}
                <FaChevronCircleDown className="text-lg"/>
            </Panel>
            {isOpen &&(
                <Panel className="absolute top-full">
                    {renderedOption}
                </Panel>
            )}
        </div>
    )
  }
  
  export default Dropdown