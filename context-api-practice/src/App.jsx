import React,{useContext} from 'react'
import { UserDataContext } from "./contexts/UserContext";

const App = () => {
  const all = useContext(UserDataContext)
  // console.log(all);
  
  
  return (
    <div>
      <h1>User List</h1>
      {all.map(function(elem,idx){
        return <div className='users' key={idx}>
          <h1>{elem.name}</h1>
          <h2>{elem.email}</h2>
          <h3>{elem.age}</h3>
        </div>
      })}
    </div>
  )
}

export default App
