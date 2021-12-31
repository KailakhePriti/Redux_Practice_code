import React,{useState} from 'react'
import '../css/Todo.css'
import { BiListPlus } from 'react-icons/bi';

import { GrAdd } from 'react-icons/gr';
import { MdDeleteOutline } from 'react-icons/md';
import {Input,Button} from 'reactstrap';
import {addTodo,delTodo,removeTodo} from '../actions/index';
import { useSelector,useDispatch } from 'react-redux';

export default function Todo() {
    const [inputValue, setInputValue] = useState("");
    const [text, setText] = useState('Check List');
    const myTodoState=useSelector((state)=> state.toggleTodoList.data_list);
    const style = { color: "white", fontSize: "1.5em" };
    const dispatch=useDispatch()
    return (
        <div>
            <div className="todo_list">
                <h1 className="heading">Todo List</h1>
                <figure className="fig" style={{width: '40%'}} >
                    <figcaption className="caption">Add Your Todo List here <BiListPlus/> </figcaption>
                </figure>
                <div className="addItems" style={{width: '20%'}}>
                    <GrAdd  className="add" title="add" onClick={()=>dispatch(addTodo(inputValue),setInputValue(''))}/>
                    <Input type="text" placeholder="✍ Add Your Items.." style={{width: '220%'}}
                    value={inputValue}
                    onChange={(event)=>setInputValue(event.target.value)}
                    />
                </div>
                <div className="ShowItems" style={{width: '20%'}}>
                    {
                        myTodoState.map((elem)=>{
                            return(
                                <div className="itemList" key={elem.id}>
                                    <h3 className="item_heading">{elem.data}</h3>
                                    <div className="list_btn">
                                        <MdDeleteOutline className="del" title="delete" onClick={()=>dispatch(delTodo(elem.id))}/>
                                    </div> 
                                </div>
                            )
                        })
                    }
                    <div className="showItems">
                        <Button className="check_btn" 
                            style={{ backgroundColor: 'black',border: 'none',height: '50px',
                            width: '250px',fontWeight: '100',fontSize: '30px'}}
                            onClick={()=> dispatch(removeTodo(),setInputValue(''),setText('Remove All...'))}>{text}
                        </Button>
                    </div>
                </div>
            </div>       
        </div>
    )
}
