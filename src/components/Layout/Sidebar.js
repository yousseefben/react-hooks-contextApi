import React, { Component } from 'react';
import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';
import './header.css';

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
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
    );
  }
}
export default SiderDemo;