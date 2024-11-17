import Dropdown from "../components/Dropdown";
import { useState } from "react";

function DropdownPage() {
  const [selection, setSelection] = useState(null);
  const handleSelect = (option) => {
    setSelection(option);
  }

  const options = [
    {label: 'Red', value: 'red'},
    {label: 'Blue', value: 'blue'},
    {label: 'Yellow', value: 'yellow'},
  ];

  return (
    <div className="flex">
      <Dropdown options={options} onChange={handleSelect} value={selection} />
    </div>
  );
}

export default DropdownPage;
