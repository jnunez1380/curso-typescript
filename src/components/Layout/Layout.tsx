import Navbar from 'components/Navbar/Navbar';
import React from 'react';


function Layout({children}: any) {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    )
}



export default Layout;
