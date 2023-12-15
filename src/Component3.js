import { useContext } from "react";
import {sampleContext} from './App'

function Component3(){

const user= useContext(sampleContext)

return (<>
<h2>Inside the componenet 3</h2>
<h2>the user value in component 3 is {user}</h2>
</>)

}


export default Component3;