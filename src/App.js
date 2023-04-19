import React, { useEffect, useState } from 'react';
import Home from './Home';
import './App.css';
import Section1 from './Section1';
import Start from './Start';
function App() {
  const [isTrue, setIstrue] = useState(true)
  
  useEffect(() => {
    const wait = setTimeout(() => {
      setIstrue(!isTrue)
    },2000)
    
  },[])


  return (
    <>{
      isTrue ? <Start/> :<Section1/> 
    }
   
      </>
  );
}

export default App;
