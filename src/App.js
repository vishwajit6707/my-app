import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import React , {useState} from 'react'
import Form from './Components/Form';

function App() {
const [mode , setMode] = useState('light');
const [alert, setalert] = useState(null);
const [et, set] = useState("Enable Blue Mode");
const [bg, sbg] = useState("white");
const [cl, scl] = useState("black");



 const  showAlert = (message , type) =>{
     setalert({
        msg : message ,
        type : type
     })
     setTimeout(() => {
      setalert(null);
     }, 3000);
 }

  const toggle = ()=>{
    if(mode === 'light'){
      setMode('dark')
      sbg('grey')
      scl('white')
      document.body.style.backgroundColor = 'grey'
      showAlert("darkMode is enabled", 'success')
    
    }else{
      setMode('light')
      sbg('white')
      scl('black')
      document.body.style.backgroundColor = 'white'
      showAlert("LightMode is enabled", 'success')
  
    }
  }

  const blueMode = () =>{
    showAlert("BlueMode is enabled", 'success')

    if(et ==='Enable Blue Mode'){
      set('Disable Blue Mode')
      setMode('info')
      sbg('blue')
      scl('white')

      document.body.style.backgroundColor = 'blue'  

    }
   else{
    sbg('white')
    scl('black')

    set('Enable Blue Mode')
    setMode('light')
    document.body.style.backgroundColor = 'white'  

  }
  }

  return ( 
<>
    <Navbar title = "Sscorromech" mode = {mode} search = "Click" toggle={toggle}/>
     <Alert alert = {alert}/>

    <div className='container my-3' >
 <Form isBlue ={et} blueMode = {blueMode} bg= {bg}  cl={cl}/>


  </div>
</>
  );
}

export default App;