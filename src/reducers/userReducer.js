export const userInitialState = {
    name: 'Marcelo',
    age: 20
}

export const userReducer = ({state, action}) => {
    switch(action.type){
        case 'CHANGE_NAME':
            return {...state, name: action.payload.name};
            break;
        
        case 'CHANGE-AGE':
            return {...state, age: action.payload.age};
            break;
    }

    return state;
}