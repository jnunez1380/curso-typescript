import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';


function Navbar(){
    return (
    <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
        <Menu.Item key="mail" icon={<MailOutlined />}>
        Navigation One
        </Menu.Item>
    </Menu>    
    );
}

export default Navbar;
