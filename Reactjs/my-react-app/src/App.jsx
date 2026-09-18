import Counter from "./Counter";
function Home(){
  return(
    <>
    <h2>My Home Page</h2>
   

    </>
  )
}

function About(){
  return(
    <>
    <h2> My About Component</h2>
    </>
  )
}

function Kanhaiya(){
  return(
    <>
    <h2 style={{color:"yellow"}}>Yo! Kanhaiya Here</h2>
    <h2 style={{color:"pink"}}>Id No:2500030535</h2>
    </>
  )
}

function Student(props){
  return(
    <>
      <h2>Student Details</h2>
      <h2>Name={props.name}</h2>
      <h2>Age={props.age}</h2>
      <h2>Marks={props.marks}</h2>
    </>
  )
}


function App(){

  let sname="Kanhaiya";
  let sage="20";
  let smarks="90";
    
  return(
    <>
    <h1 style={{color:"red"}}>Welcome to React JS</h1>
    <Home />
    <About/>
    <Kanhaiya/>
    <h1 style={{color:"red"}}>Props Demonstration</h1>
    
    <Student name={sname} age={sage} marks={smarks} />
     <h1 style={{color:"red"}}>State Demonstration</h1>
 <Counter />
    </>
  )
}
export default App;