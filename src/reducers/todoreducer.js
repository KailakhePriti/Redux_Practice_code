const initialState={
 data_list: []
}

const toggleTodoList=(state=initialState,action)=>{
    switch(action.type)
    {
        case "ADD":
            const {id,data}=action.payload;
            return {
                ...state,
                data_list: [
                    ...state.data_list,
                {
                    id: id,
                    data: data

                }]
            }
        case "DEL":
            const updatedList=state.data_list.filter((elem)=> elem.id !== action.id)
            return{
                ...state,
                data_list: updatedList
            }
        case "REMOVE":
            return{
                ...state,
                data_list: []
            }    
        default: return state;
    }
}
export default toggleTodoList;