export const listaCompInitialState = {
    lista:[]
}

export default function listaCompReducer(state,action){
    let newState;
    switch(action.type){
      case 'add':
          let id=Math.floor(Math.random()*(40000000-30000000+1))+30000000;
          newState={lista:[...state.lista,
                            {
                                carrito:action.carritoComp,
                                totalComp:action.total,
                                id:id,
                                date:(new Date().toLocaleDateString())
                            }
                        ]
                    };
      break;
    }
    return newState;
}