import Button from "../components/Button"
import { DiApple, DiAndroid, DiAptana } from "react-icons/di";

function ButtonPage() {
  const onClickHandler = () => console.log("hii");
  return (
    <>
      <div>
        <Button secondary outline rounded onClick={onClickHandler} className="mb-5">
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

export default ButtonPage
