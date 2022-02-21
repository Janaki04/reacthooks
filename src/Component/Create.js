import React,{useState} from 'react'
 
const userContext=React.createContext
const [name,setName]=useState({
    name:"apple",
    age:24
})
function Create(){
    return(
        <div>
         <userContext.Provider value={[name]}>
             
             </userContext.Provider>   
        </div>
    )
}
export default Create
