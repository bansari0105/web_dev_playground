import Header from './Header'
import './Hello.css';
import wp from './flute.png';
function Home()
{
    var a=10
    var b=20
    var mycolor={color:'white',backgroudColor:'green'}
    return (<>
        <h1>Home</h1>
        A Value is {a} <br/>
        B value is {b}
        <p style={{color:'red',backgroundColor:'black'}}>Hello</p>
        <p style={mycolor}>I am internal</p>
        <img src={wp}/>
    </>)
}
export default Home