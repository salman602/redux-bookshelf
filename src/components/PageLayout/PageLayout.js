import React from 'react';
import Sidebar from './Sidebar';

const PageLayout = ({ children }) => {
    return (
        <div className='row'>
            <Sidebar />
            <div className="col-md-9 my-4">
                {children}
            </div>
        </div>
    );
};

export default PageLayout;