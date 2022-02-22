import { createContext } from "react";

const studentData= {
  name:"A",
  course:"MERN"
}
const Context = createContext(studentData)
export default Context
