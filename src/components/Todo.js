import React,{useState} from 'react'
import '../css/Todo.css'
import ListAltIcon from '@mui/icons-material/ListAlt';
//import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import {Input,Button} from 'reactstrap';
import {addTodo,delTodo,removeTodo} from '../actions/index';
import { useSelector,useDispatch } from 'react-redux';

export default function Todo() {
    const [inputValue, setInputValue] = useState("");
    const [text, setText] = useState('Check List')
    const myTodoState=useSelector((state)=> state.toggleTodoList.data_list)
    const dispatch=useDispatch()
    return (
        <div>
            <div className="todo_list">
                <h1 className="heading">Todo List</h1>
                <figure className="fig" style={{width: '20%'}} >
                    <figcaption className="caption">Add Your Todo List here <ListAltIcon/> </figcaption>
                </figure>
            <div className="addItems" style={{width: '20%'}}>

           
                <Input type="text" placeholder="✍ Add Your Items.."
                 value={inputValue}
                 onChange={(event)=>setInputValue(event.target.value)}
                />
                <AddIcon className="add" title="add" onClick={()=>dispatch(addTodo(inputValue),setInputValue(''))}/>
            </div>
            <div className="ShowItems" style={{width: '20%'}}>
                {
                    myTodoState.map((elem)=>{
                        return(
                            <div className="itemList" key={elem.id}>
                                  <h3 className="item_heading">{elem.data}</h3>
                                 <div className="list_btn">
                                
                                    <DeleteOutlineIcon className="del" title="delete" onClick={()=>dispatch(delTodo(elem.id))}/>
                                 </div> 
                        </div>
                        )
                    })
                }
            <div className="showItems">
                <Button className="check_btn" style={{ backgroundColor: 'red',border: 'none',height: '50px',
    width: '250px',fontWeight: '100',fontSize: '30px', border: 'none',
    boxShadow: '10px 10px 10px 10px darkred'}}  onClick={()=> dispatch(removeTodo(),setInputValue(''),setText('Remove All...'))}>{text}</Button>
            </div>
                
            </div>
        </div>       
    </div>
    )
}
