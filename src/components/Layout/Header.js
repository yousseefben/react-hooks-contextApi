import React, { Component } from 'react';
import { Button, Layout, Drawer, Popover, Card, Avatar, Icon, Badge, Menu } from 'antd';
import './header.css';

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

class HeaderContent extends Component {
    state = { propover_visible: false};
    
    handleVisibleChange = (visible) => {
        this.setState({ ['propover_visible']: !this.state.propover_visible });
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
        <Menu.Item style={{paddingBottom: 8}}>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
        </Menu.Item>
      </Menu>
    );
  }
}

export default HeaderContent;
