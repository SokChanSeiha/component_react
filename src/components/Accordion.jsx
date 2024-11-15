import { useState } from "react";

const Accordion = ({ items }) => {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        return (
          <div key={item.id}>
              <div>{item.label}</div>
              {/* if isExpanded is false, nothing is being displayed */}
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
