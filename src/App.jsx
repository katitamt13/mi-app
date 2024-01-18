import { useState } from 'react';
import './Miapp.css';

const App = () => {

  const [contador, setContador] = useState(0)
  return(
    <>
       <h1>Hola mundo</h1>
       <p>Karen MT</p>
       <h3>Contador: {contador}</h3>
       <button id ="btn-incrementa" className='btns' onClick={() =>
        setContador(contador +1)}>Incrementa</button>
       <button id ="btn-decrementa" className='btns' onClick={() => 
       setContador(contador -1)}>Decrementa</button>
       <button id="btn-Reinicia" className='btns' onClick={() =>
       setContador(contador===contador)}>Reinicia</button>

    </>
  )
}

export default App;