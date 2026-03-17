import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const name="DEMO";
  var x=10;
  var y=20;
  function fun(){
    return "beside fun"
  }
  function sum(a,b){
    return a+b;
  }
  

  return (
    
    
     <div>
      <h1>jsx with curly braces</h1>
      <h2>1.Use variable with jsx</h2>
      <h2>Example of variable in DEMO</h2>
      <h2>The sum of two variable:{x+y}</h2>
      <h2>2.use function with jsx</h2>
      <h3>simple function:{fun()}</h3>
      <h3>example parameterized function:{sum(10,20)}</h3>
     </div>
     
    
  )
}

export default App
