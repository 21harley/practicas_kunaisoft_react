export const carritoInitialState = {
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
                if(el.id==state.lista[action.p].id){
                    valida=false;
                }
            })
            console.log([...state.carritoComp,state.lista[action.p]])
            if(valida){
                newState={...state,carritoComp:[...state.carritoComp,state.lista[action.p]]};
            }
        break;
        case 'del':
            let nuevo=state.carritoComp.filter((el)=>{
                if(el.id!=state.lista[action.p].id) return el;
            })
            newState={...state,carritoComp:[...nuevo]};
        break;
        case 'comp':
            newState=state
        break;
        case 'sumar':
            let suma=0;
            state.carritoComp.map((el)=>{
              suma+=el.dollar;
            })
            newState={...state,total:suma};
        break;
        default:
            newState = {carritoComp:[],total:0,iniciarCom:false,lista:[]};
    }
    return newState
}