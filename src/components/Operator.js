import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {darkBg,lightBg,incNumber,decNumber} from '../actions/index';
import { IoIosAddCircle } from 'react-icons/io';
import { AiFillMinusCircle } from 'react-icons/ai';
import '../css/Home.css'
export default function Operator() {
    const myStyle=useSelector((state)=> state.toggleColorMode);
    const myState=useSelector((state)=> state.toggleChangeNumber)
    const dispatch=useDispatch();
    const toggleEnableModes=()=>{
        if((state)=> state.backgroundColor==='whitesmoke')
        {
            dispatch(darkBg());
        }
        else{
            dispatch(lightBg());
        }
    }
    return (
        <div>
            <div className="inc_dec">
                <h4 style={{color: 'white'}}>Increment - Decrement using React Redux</h4>
                <div className="block">
                    <a className="boxes" onClick={()=> dispatch(decNumber())}><span className="sign" ><AiFillMinusCircle/></span></a>
                    <input value={myState}  className="input_box"/> 
                    <a className="boxes"  onClick={()=> dispatch(incNumber())}><span className="sign" ><IoIosAddCircle/></span></a>
                </div>
            </div>
             {/* <Button onClick={toggleEnableModes} style={{marginTop: '0px',marginBottom: '50px'}}>Enable Mode</Button> */}
        </div>
    )
}

