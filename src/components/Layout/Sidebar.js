import React, { Component } from 'react';
import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';
import './header.css';
import { FaRegMap } from "react-icons/fa";

const {
  Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {
    state = {
        collapsed: false,
      };
    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }

      select = (key) => {
          alert(key.key + key.link);
      }

  render() {
    return (
        <Sider
          trigger={null}
          theme="light"
          collapsible
          collapsed={this.state.collapsed}
          className="sider"
          width="180"
        >
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          <Menu defaultSelectedKeys={['1']} mode="inline" >
            <Menu.Item key="1" link="hey">
              <Icon type="appstore" />
              <span>Overview</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="bar-chart" />
              <span>Analytics</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="car" />
              <span>Vehicles</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="tool" />
              <span>Service</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon component={FaRegMap} />
              <span>Map</span>
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="setting" />
              <span>Settings</span>
            </Menu.Item>
        
           
          </Menu>
        </Sider>
    );
  }
}
export default SiderDemo;