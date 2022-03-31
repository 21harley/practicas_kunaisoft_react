import {useState,useRef} from 'react';

const Lista=()=>{
    const [lista,setLista]=useState([]);
    const [inputDato,setInputDato]=useState([]);
    const inputText=useRef();
    const agregarLista=(e)=>{
        e.preventDefault();
        setLista([...lista,inputDato]);
        e.target.reset();
        inputText.current.focus();
    }
    return(
        <>
        <div>
            <form onSubmit={(e)=>{agregarLista(e)}}>
                <label>Ingrese nombre:</label>
                <input type='text' ref={inputText} onChange={(e)=>{setInputDato(e.target.value)}}></input>
                <button>Agregar lista</button>
            </form>
            <ul>
                {
                    lista.map((el,index)=>{
                        return <li key={index}>{el}</li>
                    })
                }
            </ul>
        </div>
        </>
    )
}

export default Lista;