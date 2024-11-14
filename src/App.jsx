import Button from "./Button"
import { DiApple, DiAndroid, DiAptana } from "react-icons/di";

function App() {
  const onClickHandler = () => console.log("hii");
  return (
    <>
      <div>
        {/* after use ...rest, just use normal event handler */}
        <Button secondary outline rounded onClick={onClickHandler} >
          <DiApple/>
          One One
        </Button>
      </div>
      <div>
        {/* another event is used here and it will be sent via rest */}
        <Button danger outline onMouseEnter={onClickHandler}>
          <DiAndroid/>
          Two Two
        </Button>
      </div>
      <div>
        {/* another event*/}
        <Button warning onMouseLeave={onClickHandler}>
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
