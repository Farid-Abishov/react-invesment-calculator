import { useEffect } from "react";
import { useState } from "react";

export default function UserInput({childData}) {
  const [input,setInput]=useState(1000);
  const [annualInvest,setAnnualInvest]=useState(1200);
  const [expectReturn,setExpectReturn]=useState(5);
  const [duration,setDuration]=useState(10)
  
  useEffect(()=>{
   const data={
    input,annualInvest,expectReturn,duration
   }  
   childData(data)  
  },[input,annualInvest,expectReturn,duration]);

  
  function handleInput(event){
    setInput(+event.target.value)
  }
  function handleInvest(event){
    setAnnualInvest(+event.target.value)
  }
  function handleExpect(event){
    setExpectReturn(+event.target.value)
  }
  function handleDuration(event){
    setDuration(+event.target.value)
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">initial investment</label>
          <input type="text" value={input} onChange={(event)=>handleInput(event)}/>
        </p>

        <p>
          <label htmlFor="">Annual investment</label>
          <input type="text" value={annualInvest}  onChange={(event)=>handleInvest(event)}/>
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="">expected return</label>
          <input type="number" value={expectReturn} onChange={(event)=>handleExpect(event)}  />
        </p>

        <p>
          <label htmlFor="">Duration</label>
          <input type="number" value={duration} onChange={(event)=>handleDuration(event)} />
        </p>
      </div>
    </section>
  );
}
