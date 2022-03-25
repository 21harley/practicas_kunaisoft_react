import './App.css';
import React,{ useState } from 'react';

type Item={
  title:string,
  descrition:string,
  editar:boolean
}

type CardEdit={
  state:boolean,
  id:number
}

const valorInicial:Item={title:'',descrition:'',editar:false}
const cardEditInicial:CardEdit={state:false,id:-1}

function App():JSX.Element {

  const [datos,setDatos]=useState(valorInicial);
  const [clear,setClear]=useState(false);
  const [listaCard,setListaCard]=useState<Item[]>([]);
  const [cambiarCard,setCambiarCard]=useState(cardEditInicial);

 const onChangeForm=(e:React.ChangeEvent<HTMLInputElement>)=>{

  let aux={[e.target.name]:e.target.value};

  setDatos({...datos,...aux});
 }

 const crearCard=(e:React.FormEvent)=>{
   e.preventDefault();
   limipiarForm(e.target);
   setListaCard([...listaCard,datos]);
   setClear(!clear);
 }

 const limipiarForm=(e:any)=>{
  e.reset();
  setDatos(valorInicial);
 }
 const revelar=(i:number)=>{
  let aux : Item[]=[...listaCard];
  aux[i].editar=!aux[i].editar;
  setListaCard(aux);
  console.log(aux);
 }
 const editarActive=(i:number,des:string)=>{
  if(des==='editar' && cambiarCard.state===false){
    setDatos(listaCard[i]);
    setCambiarCard({id:i,state:!cambiarCard.state });
    revelar(i);
  }

  if(des==='editar' && cambiarCard.state===true && cambiarCard.id===i){
    let aux : Item[]=[...listaCard];
    aux[i]={...datos,editar:false};
    setListaCard(aux);
    setDatos(valorInicial);
    setCambiarCard(cardEditInicial);
  }

  if(des==='revelar' && cambiarCard.id===i){
    setCambiarCard(cardEditInicial);
    revelar(i);
  }
  
 } 

 const eliminarCard=(i:number)=>{
   if(cambiarCard.state!==true){
    let aux : Item[]=[...listaCard];
    aux.splice(i,1);
    setListaCard(aux);
   }else{
     alert('Por favor terminar de editar');
   }

 }

  return (
   <>
    <div className='centro'>
         <h1>Hello world <br /> react typescritp</h1>
         <form action="" className='form' onSubmit={(e)=>crearCard(e)}>
           <h3>Cargar card</h3>

           <input onChange={(e)=>onChangeForm(e)} name='title' type="text"     
                  disabled={cambiarCard.state?true:false}  required/>

           <input  onChange={(e)=>onChangeForm(e)} name='descrition' type="text"  
                  disabled={cambiarCard.state?true:false} required/>

           <button className='cargar' disabled={cambiarCard.state?true:false}>
             cargar
           </button>
         </form>
         <div className='container-card'>
            {
              listaCard.map((el:Item,i:number)=>{
                return(
                    (!el.editar?
                      <div key={i} className='form'>
                        <div className='header-card'></div>
                      <h1>{el.title}</h1>
                      <p>
                        {el.descrition}
                      </p>
                      <button className='eliminar-card' onClick={()=>{eliminarCard(i)}}>
                        Eliminar
                      </button>
                      <button className='editar-card' onClick={()=>{editarActive(i,'editar')}}>
                         Editar
                      </button>
                    </div>
                    :
                    <div key={i} className='form form-edit'>
                      <div className='header-card'></div>
                      <label htmlFor="title">Title:</label>
                      <input type="text" name='title' defaultValue={el.title} onChange={(e)=>onChangeForm(e)}/>
                      <label htmlFor="descrition">Descrition:</label>
                      <input name="descrition" id="" defaultValue={el.descrition} onChange={(e)=>onChangeForm(e)}></input>
                      <button className='volver-form' onClick={()=>{editarActive(i,'revelar')}}>
                        volver
                      </button>
                      <button className='editar-card' onClick={()=>{editarActive(i,'editar')}}>
                         Editar
                      </button>
                    </div>)
                )
              })

            }
         </div>
    </div>

   </>
  );
}

export default App;
