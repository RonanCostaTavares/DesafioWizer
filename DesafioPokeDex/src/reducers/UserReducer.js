export const initialState = {
    name: '',
    age: '',
};


export const UserReducer = (state, action) => {

    switch (action.type) {
        case 'setNameAndAge': 
            return { ...state, name: action.payload.name, age: action.payload.age };
        break;
        default:
            return state;
    }

};