import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined, ContactsOutlined } from '@ant-design/icons';


function Navbar(){
    return (
    <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
        <Link to="/">
            <Menu.Item key="mail" icon={<HomeOutlined />}>
                Home
            </Menu.Item>
        </Link>
        <Link to="/contact">
            <Menu.Item key="mail" icon={<ContactsOutlined />}>
                Contact
            </Menu.Item>
        </Link>
    </Menu>    
    );
}

export default Navbar;
