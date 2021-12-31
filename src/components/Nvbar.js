import React,{useState} from "react";
import {Navbar,NavItem,NavLink,Nav,DropdownMenu,DropdownItem,DropdownToggle,NavbarText,UncontrolledDropdown} from 'reactstrap';
import {Link} from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import {darkBg,lightBg} from '../actions/index';

export default function Nvbar() {
    const myStyle=useSelector((state)=> state.toggleColorMode);
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
      <div>
        <Navbar  expand="md" dark style={{backgroundColor: 'black'}}>
          
            <Nav className="me-auto" navbar >
              <NavItem style={{marginLeft: '20%'}}>
                  <NavLink>
                        <Link to="/home" style={{textDecoration: 'none'}}>Home</Link>
                  </NavLink>
              </NavItem>
              <NavItem style={{marginLeft: '20%'}}>
                  <NavLink>
                        <Link to="/about" style={{textDecoration: 'none'}}>About</Link>
                  </NavLink>
              </NavItem>
              <NavItem style={{marginLeft: '20%'}}>
                <NavLink href="https://github.com/reactstrap/reactstrap" >
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown inNavbar nav style={{marginLeft: '20%'}}>
                <DropdownToggle caret nav>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  
                  <DropdownItem>
                    <NavItem >
                        <NavLink>
                            <Link to="/operator" style={{textDecoration: 'none'}}>Increment-Decrement</Link>
                        </NavLink>
                    </NavItem>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavItem >
                            <NavLink>
                                <Link to="/todolist" style={{textDecoration: 'none'}}>Your Todo-List</Link>
                            </NavLink>
                        </NavItem>
                  </DropdownItem>
                  <DropdownItem divider />

                  <DropdownItem>
                        <NavItem style={{marginLeft: '20%'}}>
                            <NavLink>
                                <Link to="/home" style={{textDecoration: 'none'}}>home</Link>
                            </NavLink>
                        </NavItem>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
        </Navbar>
      </div>
            {/* <Button onClick={toggleEnableModes} style={{marginTop: '0px',marginBottom: '50px'}}>Enable Mode</Button> */}
    </div>
  );
}
