import './App.css';
 import Navbar from './components/Navbar';
 import Textform from './components/Textform';
 import About from './components/About';
 import Alert from './components/Alert';
 import React,{useState} from 'react'
 import Classes  from  './components/Classes';


function App() {
  const [alert,setalert] = useState(null);

const showalert = (message,type) =>{
  setalert({
msg : message,
type : type
  })
  setTimeout(()=>{
    setalert(null)
  },2000)
}

  const [mode,setmode] = useState("light");
const togglemode = () =>{
  if(mode === "light"){
    setmode("dark");
    document.body.style.backgroundColor = '#042743';
    showalert("dark mode has been enabled", "success");
  }
  else{
    setmode("light");
    document.body.style.backgroundColor = '#fff';

  }
}


  return (
<>


    <Navbar title="Navbar" mode = {mode} togglemode={togglemode} contTx = "Home"/>
    <Alert alert = {alert} />
    <div className="container my-3">
      <About title = "About Us"/>
            
          
  <Textform txt="welcome" mode = {mode} showalert={showalert} />
         
<Classes />
    </div>
</>
  );
}

export default App;
