import React from "react";
function Hooksdemo(){
    const [counter,setCounter] =React.useState(0)
    const [msg,setMsg] =React.useState("")
    const increment =()=>
    {
        if(counter>=5)
        {
            setMsg("Sorry value is >=5")
        }
        else{
            setCounter(counter+1)
            setMsg("")
        }
    }
    const decrement =()=>
    {
        if(counter<0)
        {
            setMsg("Sorry value is <0")
        }
        else{
            setCounter(counter-1)
            setMsg("")
        }
    }
    return(<>
    <h1>Welcome to Hooks</h1>
    <h1>Counter value is{counter}</h1>
    <input type="Button" value="+" onClick={increment}/>
    <input type="Button" value="-" onClick={decrement}/>
    <input type="Button" value="X" onClick={()=>setCounter(0)}/>
    {msg}
    </>)
}
export default Hooksdemo;