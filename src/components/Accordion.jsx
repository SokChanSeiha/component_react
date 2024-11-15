import { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleLeft } from "react-icons/fa";
const Accordion = ({ items }) => {
    const [expandedIndex, setExpandedIndex] = useState(0);
    const handleClick =(nextIndex) => {
        setExpandedIndex(nextIndex);
    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const icon = (
            <span className="text-2xl">
                {isExpanded ? <FaChevronCircleDown /> : <FaChevronCircleLeft/>}
            </span>
        );
        return (
          <div key={item.id}>
            <div
                className="flex p-3 justify-between bg-gray-50 border-b items-center cursor-pointer"
                onClick={() => handleClick(index)}> 
                {item.label}
                {icon}
            </div>
              {isExpanded && <div className="bg-gray-200 border-b p-5">{item.content}</div>} 
          </div>
        )
    });

    return (
        <div className="border-x border-t round">
            {renderedItems}
        </div>
    )
}

export default Accordion
