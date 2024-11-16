import Dropdown from "./components/dRopdown";
import { useState } from "react";

function App() {
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
      <Dropdown options={options} onChange={handleSelect} value={selection} />
    </div>
  );
}

export default App
