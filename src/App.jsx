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

  return <Dropdown
    options={options}
    onChange={handleSelect} 
    value={selection} 
    />;
}

export default App
