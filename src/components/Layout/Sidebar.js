import './header.css';

import {Icon, Layout, Menu} from 'antd';
import React, {useState} from 'react';
import {FaRegMap} from 'react-icons/fa';

const {
    Sider,
} = Layout;

const SiderDemo = () => {

    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(!collapsed)
    };



    return (
        <Sider
            trigger={null}
            theme="light"
            collapsible
            collapsed={collapsed}
            className="sider"
            width="180"
        >
            <Icon
                className="trigger"
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={toggle}
            />
            <Menu defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" link="hey">
                    <Icon type="appstore"/>
                    <span>Overview</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="bar-chart"/>
                    <span>Analytics</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="car"/>
                    <span>Vehicles</span>
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="tool"/>
                    <span>Service</span>
                </Menu.Item>
                <Menu.Item key="5">
                    <Icon component={FaRegMap}/>
                    <span>Map</span>
                </Menu.Item>
                <Menu.Item key="6">
                    <Icon type="setting"/>
                    <span>Settings</span>
                </Menu.Item>


            </Menu>
        </Sider>
    );
};

export default SiderDemo;
