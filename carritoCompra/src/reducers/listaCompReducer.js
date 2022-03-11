export const listaCompInitialState = {
    lista:[]
}

export default function listaCompReducer(state,action){
    let newState;
    switch(action.type){
      case 'add':
          console.log(state,action)
          newState={lista:[...state.lista,[action.carritoComp,action.total]]};
      break;
    }
    return newState;
}