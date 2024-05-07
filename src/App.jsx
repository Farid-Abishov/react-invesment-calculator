import UserInput from "./components/UserInput"
import Result from "./components/Result"
import { useState } from "react"
function App() {
  const[formResult,setFormResult]=useState();
  function handleChildData(data){
    setFormResult(data)
  }
  return (
   <div>
   <UserInput childData={handleChildData}/>
   <Result  result={formResult}  />
   </div>
  )
}

export default App
