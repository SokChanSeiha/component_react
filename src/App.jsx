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
    onSelect={handleSelect} // selecting an option, it takes (optionClicked), as handleSelect(optionClicked)
    selection={selection} // the selected option : {label: 'selected label', value: 'seleted value'}
    />;
}

export default App
