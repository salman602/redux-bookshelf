import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='col-md-3'>
            <ul>
                <NavLink as='li' to='/'>
                    Discover
                </NavLink> <br />
                <NavLink as='li' to='/reading'>
                    Reading List <span> 0</span>
                </NavLink> <br />
                <NavLink as='li' to='/finished'>
                    Finished Books <span> 0</span>
                </NavLink>
            </ul>
        </div>
    );
};

export default Sidebar;