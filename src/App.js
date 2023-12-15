
import { createContext, useState } from "react";
import Component1 from "./Component1";

export const sampleContext = createContext();

function App() {


  const [user, setUser] = useState("Aaron Luke")
  const container = document.getElementById("root");
  return (



    <sampleContext.Provider value={user}>

      <div >
        <h2>Inside app component use name is: {user}</h2>
        <Component1/>
      </div>
    </sampleContext.Provider>
  );
}

export default App;
