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
            let cC=[...state.carritoComp];
            let sl=[...state.lista];
            let nu=sl.map((el)=>{
                if(el.id==cC[0].id){
                  let resp=el.shopId-Number(cC[0].shopId)
                  el={...el,shopId:resp};
                }
                return el;
            })
            console.log(sl,cC,nu)
            newState={...state,lista:[...nu]}
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
    console.log(newState,'nuevo estado');
    return newState
}
/**
 * 
 * export const carritoInitialState = {
    carritoComp:[],
    total:0,
    iniciarCom:false,
    lista:[]
}

export default function carritoReducer(state,action){
    let newState;
    switch(action.type){
        case 'init':
            let {data}=action;
           newState={carritoComp:[],total:0,iniciarCom:false,lista:[...data]};
        break;    
        case 'add':
            let valida=true;
            state.carritoComp.map((el)=>{
                if(el.id==action.lista[action.p].id){
                    valida=false;
                }
            })
            console.log([...state.carritoComp,action.lista[action.p].id])
            if(valida){
                newState={...state,carritoComp:[...state.carritoComp,aux]};
            }
        break;
        case 'add-cant':
                state.carritoComp.map((el)=>{
                   if(el.id==elm.id){
                       el.shopId=action.cant;
                    }
                })
                newState={...state,carritoComp:[...state.carritoComp]};
        break;
        case 'del':
            let nuevo=state.carritoComp.filter((el)=>{
                if(el.id!=elm.id) return el;
            })
            newState={...state,carritoComp:[...nuevo]};
        break;
        case 'comp':
            newState={...state,iniciarCom:true};
        break;
        case 'comp-yes':
            let aux=state.carritoComp.map((el)=>{
                let resta=state.lista.map((elm)=>{
                    if(el.id==elm.id){
                        elm.shopId=elm.shopId-el.shopId;
                    }
                })
                state.lista=resta;
            })
            newState={...state,total:0,carritoComp:[],iniciarCom:false,lista:aux}
        break;
        case 'sumar':
            let suma=0;
            state.carritoComp.map((el)=>{
              suma+=el.dollar*el.shopId;
            })
            newState={...state,total:suma};
        break;
        default:
            newState = {carritoComp:[],total:0,iniciarCom:false,lista:[]};
    }
    console.log(newState);
    return newState
}
 */