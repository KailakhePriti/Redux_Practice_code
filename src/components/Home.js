import React from 'react'
import '../css/Home.css'
import { useSelector,useDispatch } from 'react-redux'
import {incNumber,decNumber,darkBg,lightBg} from '../actions/index';
import {Button} from 'reactstrap'
export default function Home() {
    const myState=useSelector((state)=> state.toggleChangeNumber)
    const myStyle=useSelector((state)=> state.toggleColorMode)
    const dispatch=useDispatch()
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
        <div >
            <div style={myStyle}>
                <h1 >React Redux</h1>
                
                <p style={{textAlign: 'justify'}}>
                It is a long established fact that a reader will be distracted by the readable 
                content of a page when looking at its layout. The point of using Lorem Ipsum is 
                that it has a more-or-less normal distribution of letters, as opposed to using '
                Content here, content here', making it look like readable English. Many desktop 
                publishing packages and web page editors now use Lorem Ipsum as their default model 
                text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                Various versions have evolved over the years,
                 sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
               
            </div>
            <Button onClick={toggleEnableModes} style={{marginTop: '0px',marginBottom: '50px'}}>Enable Mode</Button>
                
            <div className="inc_dec">
                <h4>Increment - Decrement using React Redux</h4>
                <div className="block">
                    <a className="boxes" onClick={()=> dispatch(decNumber())}><span className="sign" >-</span></a>
                    <input value={myState}  className="input_box"/>
                    <a className="boxes"  onClick={()=> dispatch(incNumber())}><span className="sign" >+</span></a>
                </div>
            </div>
        </div>
    )
}
