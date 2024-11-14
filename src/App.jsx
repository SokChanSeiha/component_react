import Button from "./Button"
import { DiApple, DiAndroid, DiAptana } from "react-icons/di";

function App() {

  return (
    <>
      <div>
        <Button secondary outline rounded>
          <DiApple/>
          One One
        </Button>
      </div>
      <div>
        <Button danger outline>
          <DiAndroid/>
          Two Two
        </Button>
      </div>
      <div>
        <Button warning>
          <DiAptana/>
          Three
        </Button>
      </div>
      <div>
          <Button secondary outline rounded>Four</Button>
      </div>
      <div>
          <Button primary rounded>Five</Button>
      </div>
    </>
  )
}

export default App
