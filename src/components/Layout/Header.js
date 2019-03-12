import './header.css';
import { IoIosLogOut } from "react-icons/io";

import { Avatar, Badge, Button, Card, Icon, Layout, Menu, Popover, Divider } from 'antd';
import React, { Component } from 'react';

const {
    Header
  } = Layout;
  const {Meta} = Card
  
  const NotificationContent = () => {
      return (
        <Card 
            bordered = {false}
            style={{ width: 300}}
            bodyStyle={{padding: 0}}>
                <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Card title"
                description="This is the description"
                style={{marginTop: 15}}
                />
                <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Card title"
                description="This is the description"
                style={{marginTop: 15}}
                />
        </Card>)
  }

  const menu = (
    <Card 
      className="card-user"
      bordered = {false}
      style={{ width: 120}}
      bodyStyle={{padding: 0}}>
        <Button icon="user" className="custom-btn">Profile</Button>
        <Divider />
        <Button type="danger" className="custom-btn"><Icon component={IoIosLogOut} />Sign Out</Button>

    </Card>
  );
  

class HeaderContent extends Component {
    state = { 
      propover_visible: false,
      avatar_visible: false
    };
    
    handleVisibleChange = (visible) => {
        this.setState({ ['propover_visible']: !this.state.propover_visible });
      }
    
    handleVisibleAvatarChange = (visible) => {
        this.setState({ ['avatar_visible']: !this.state.avatar_visible });
      }
    

  render() {
    
    return (
     <Menu
        className="header"
        mode="horizontal"
      >
        
        <Menu.Item onClick={this.handleVisibleChange} style={{paddingTop: 10}}>
        <Popover
            content={NotificationContent()}
            trigger="click"
            visible={this.state.propover_visible}
            placement="bottomRight"
        >
            <Badge dot className="notification">
                <Icon type="notification" style={{fontSize: 20}}/>
            </Badge>
        </Popover>
        </Menu.Item>
        <Menu.Item onClick={this.handleVisibleAvatarChange} style={{paddingBottom: 6}} >
        <Popover
            overlayClassName='pop'
            content={menu}
            trigger="click"
            visible={this.state.avatar_visible}
            placement="bottomRight"
        >
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
        </Popover>
        </Menu.Item>
      </Menu>
    );
  }
}

export default HeaderContent;
