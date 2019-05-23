import './header.css';

import {Layout} from 'antd';
import React from 'react';


const {
    Content
} = Layout;

const EmptyLayout = (props) => {

    const {children} = props;
    return (
        <Layout style={{minHeight: '100vh', background: '#fff'}} children={children}>
            <Content>
                {children}
            </Content>
        </Layout>

    );
};
export default EmptyLayout;
