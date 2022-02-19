import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='col-md-3'>
            <ul>
                <NavLink style={{ textDecoration: 'none' }} as='li' to='/'>
                    Discover
                </NavLink> <br />
                <NavLink style={{ textDecoration: 'none' }} as='li' to='/reading'>
                    Reading List <span> 0</span>
                </NavLink> <br />
                <NavLink style={{ textDecoration: 'none' }} as='li' to='/finished'>
                    Finished Books <span> 0</span>
                </NavLink>
            </ul>
        </div>
    );
};

export default Sidebar;