import { useState } from "react"
import { FaStethoscope } from "react-icons/fa";

function Dropdown({options}) {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        // setIsOpen((currentIsOpen) => !currentIsOpen); : totally fine
        setIsOpen(!isOpen);
    };

    const renderedOption = options.map((option) => {
        return <div key={option.value}> {option.label} </div>
    });
    return (
        <div>
            <div onClick={handleClick}>Select ...</div>
            {isOpen && <div>{renderedOption}</div>}
        </div>
    )
  }
  
  export default Dropdown