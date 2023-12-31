import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [mode, setMode] = useState('light'); // Wheather dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#083203';
    } else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
      <TextForm headline="Enter your text to analyze" mode={mode}/>
    </div>
    </>
    
  );
}

export default App;
