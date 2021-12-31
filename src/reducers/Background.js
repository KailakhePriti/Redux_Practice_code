
const initialColorState={
    padding: '20px',
    color: 'white'
};
const toggleColorMode=(state=initialColorState,action)=>{
    switch(action.type)
    {
        case 'DARK':
            return { ...state,  backgroundColor: 'black',color : 'grey',padding: '10px'};
        case 'LIGHT':
            return { ...state,  backgroundColor: 'white'};
        default: return state;
    }
}
export default toggleColorMode;