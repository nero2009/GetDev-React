import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {
    
       { if(props.isLoaded){
            return(
                <div>
                    <NavLink className='home' to='/' >Home</NavLink>
                    <NavLink className='album' to='/album'>Album</NavLink>
                    <NavLink className='user' to='/users'>Users</NavLink>
                </div>
            )}else{
                return <div></div>
            }
        }
            
    
};

export default NavBar;