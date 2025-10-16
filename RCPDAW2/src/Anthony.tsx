import React, { useState } from 'react'

const Anthony = () => {

  const[MiNumero,setMiNumero]=useState(0);

  const[MiTexto,setMiTexto]=useState("texto");

  return (
    <div>
        
        <button onClick={() =>{
          setMiNumero(MiNumero + 1);
          }}>La cuenta va por {MiNumero}</button>
          
          {
          
              MiNumero % 2 === 0
              ? <p>El numero es par</p>
              : <p>El numero es impar</p>
          
          
          }
      
    </div>
  )
}

export default Anthony
