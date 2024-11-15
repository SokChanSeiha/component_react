import { useState } from "react";

const Accordion = ({ items }) => {
    const [expandedIndex, setExpandedIndex] = useState(0);
    const handleClick =(nextIndex) => {
        setExpandedIndex(nextIndex);
    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        // logic to render icon
        const icon = <span>{isExpanded ? "DOWN" : "LEFT"}</span>
        return (
          <div key={item.id}>
              <div onClick={() => handleClick(index)}> 
                {icon}
                {item.label} </div>
              {isExpanded && <div className="bg-red-500">{item.content}</div>} 
          </div>
        )
    });

    return (
        <div>
            {renderedItems}
        </div>
    )
}

export default Accordion
