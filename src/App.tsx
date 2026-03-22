import { useState } from "react";
import "./App.css";
import User from "./pages/User";

function App() {
  let user = 'vishan'
  //const [user,setUser] = useState('vishan');
  const[page,setPage] = useState("");
  

  const changeValue = () =>{
    //setUser('kamal')
    user = 'dfdsfgdfs'
  }
  return (
<div>
  <h1>{user}</h1>
  <button onClick={changeValue} className="bg-green-300 p-4">Click</button>

<button onClick={()=>setPage("user")}>trhtyruyu</button>
{page === 'user' && (<><User/></>)}
  
</div>
  );
}

export default App;
