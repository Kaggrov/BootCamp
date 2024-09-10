
const Initial_State = {
    todo:null
}


export const ThunkReducer = (state=Initial_State,action) => {

    switch(action.type){
        case 'DELETE':{
            return Initial_State;
        }
        case 'ADD':{
            return {
                ...state,
                todo:action.payload
            }
        }
        default : return state;
    }
}