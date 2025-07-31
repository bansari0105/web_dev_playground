function Eventdemo()
{
 const demo=()=> {
    alert("welcome")
 }
 const printData=(event) =>{
    consol.log("Type  is"+event.type)
    consol.log("Name  is"+event.target.type)
    consol.log("value  is"+event.target.value)
    console.log(event.target.value)
 }

 return (<>
 <input type="button" onClick={demo} value="clickMe"/>
 <input type="button" onClick={() => alert("Inline")} value="Inline"/>
 <input type="button" name="btn1" value="btn1" onClick={printData}/>
 Text1<input type="text" name="text1" onClick={printData}/>
 Text2<input type="text" name="text2" onClick={printData}/>
 </>)
}

export default Eventdemo