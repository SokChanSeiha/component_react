import { useState } from "react"

function Dropdown({options, selection, onSelect}) {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    
    const handleOptionClick = (optionClicked) => {
        // CLOSR DROPDOWN
        setIsOpen(false);
        // WHAT OPTION DID THE USER CLICK ON?
        onSelect(optionClicked);
    }

    const renderedOption = options.map((option) => {
        return (
            <div onClick={() => handleOptionClick(option)} key={option.value}>
                {option.label}
            </div>
        )
    });

    let content = 'Select...';
    if (selection) { // if not null
        content = selection.label;
    }

    return (
        <div>
            <div onClick={handleClick}>{content}</div>
            {isOpen && <div>{renderedOption}</div>}
        </div>
    )
  }
  
  export default Dropdown