import './header.css';

import {Avatar, Button, Card, Divider, Icon, Menu, Popover} from 'antd';
import React, {useState} from 'react';
import {IoIosLogOut} from 'react-icons/io';


const menu = (
    <Card
        className="card-user"
        bordered={false}
        style={{width: 120}}
        bodyStyle={{padding: 0}}>
        <Divider/>
        <Button type="danger" className="custom-btn"><Icon component={IoIosLogOut}/>Sign Out</Button>

    </Card>
);


const HeaderContent = () => {

    const [avatarVisible, setAvatarVisible] = useState(false);

    const handleVisibleAvatarChange = () => {
        setAvatarVisible(!avatarVisible);
    };

    return (
        <Menu
            className="header"
            mode="horizontal"
        >
            <Menu.Item onMouseEnter={handleVisibleAvatarChange} onMouseLeave={handleVisibleAvatarChange}
                       style={{paddingBottom: 6}}>
                <Popover
                    overlayClassName='pop'
                    content={menu}
                    visible={avatarVisible}
                    placement="bottomRight"
                >
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                </Popover>
            </Menu.Item>
        </Menu>
    );
};

export default HeaderContent;
