export default (state=[0,0],action)=>{

switch (action.type){
    case "add":
    {
        let index = action.index;
        let newState = [...state]
        let count = newState[index]
        newState[index] = count+1;
        return newState;
    }
    case "sub":
    {
        let index = action.index;
        let newState = [...state]
        let count = newState[index]
        newState[index] = count-1;
        return newState;
    }
    default:
        return state;
}



}