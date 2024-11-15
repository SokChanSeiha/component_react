import { useState } from "react";

const Accordion = ({ items }) => {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const renderedItems = items.map((item, index) => {
        // logic to expanded within index
        if (index === expandedIndex) {
            console.log("expanded at", index);
        } else {
            console.log("collapsed at", index);
        }

        // rendered the content
        const isExpanded = index === expandedIndex;

        return (
          <div key={item.id}>
              <div>{item.label}</div>
              <div>{item.content}</div>
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
