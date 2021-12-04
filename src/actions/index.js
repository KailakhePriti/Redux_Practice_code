//All actions in the project

export const incNumber=()=>{
    return{
        type: "INCREMENT",
       
    }
}
export const decNumber=()=>{
    return{
        type: "DECREMENT",
      
    }
}
export const darkBg=()=>{
    return{
        type: "DARK",
    }
}
export const lightBg=()=>{
    return{
        type: "LIGHT",
    }
}
export const addTodo=(data)=>{
    return{
        type: "ADD",
        payload: {
            id: new Date().getTime().toString(),
            data:data
        }
    }
}
export const delTodo=()=>{
    return{
        type: "DEL"
    }
}
export const removeTodo=()=>{
    return{
        type: "REMOVE"
    }
}

