export const carritoInitialState = {
    carritoComp:[],
    total:0,
    iniciarCom:false,
    lista:[],
    mostrarLista:false
}

export default function carritoReducer(state,action){
    let newState;
    switch(action.type){
        case 'init':
            let {data}=action;
           newState={carritoComp:[],total:0,iniciarCom:false,lista:[...data],mostrarLista:false};
        break;    
        case 'add':
            let valida=true;
            state.carritoComp.map((el)=>{
                if(el.id==state.lista[action.p].id){
                    valida=false;
                }
            })

            if(valida){
                let aux={...state.lista[action.p]};
                aux.shopId=action.cant;
                newState={...state,carritoComp:[...state.carritoComp,aux]};
            }
        break;
        case 'add-cant':
                state.carritoComp.map((el)=>{
                   if(el.id==state.lista[action.p].id){
                       el.shopId=action.cant;
                    }
                })
                newState={...state,carritoComp:[...state.carritoComp]};
        break;
        case 'del':
            let nuevo=state.carritoComp.filter((el)=>{
                if(el.id!=state.lista[action.p].id) return el;
            })
            newState={...state,carritoComp:[...nuevo]};
        break;
        case 'comp':
            newState={...state,iniciarCom:true};
        break;
        case 'comp-yes':
            let carComp=[...state.carritoComp];
            let nuevaLista=[...state.lista];
            
            carComp.map((elm)=>{
                nuevaLista=nuevaLista.map((el)=>{
                    if(el.id==elm.id){
                      let resp=el.shopId-Number(elm.shopId)
                      el={...el,shopId:resp};
                    }
                    return el;
                })
            })

            newState={carritoComp:[],total:0,iniciarCom:false,mostrarLista:false,lista:[...nuevaLista]}
        break;
        case 'sumar':
            let suma=0;
            state.carritoComp.map((el)=>{
              suma+=el.dollar*el.shopId;
            })
            newState={...state,total:suma};
        break;
        case 'mostrarLista':
            newState={...state,mostrarLista:!state.mostrarLista};
        break;    
        default:
            newState={carritoComp:[],total:0,iniciarCom:false,lista:[],mostrarLista:false};
    }
    //console.log(newState,'nuevo estado');
    return newState
}
