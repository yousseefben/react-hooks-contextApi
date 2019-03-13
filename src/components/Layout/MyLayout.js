import './header.css';

import { Layout } from 'antd';
import React, { Component } from 'react';

import HeaderContent from './Header';
import SiderDemo from './Sidebar';

const {
  Header,Content
} = Layout;

class MyLayout extends Component {

  
  render() {
    const { children } = this.props;
    return (
        <Layout style={{ minHeight: '100vh', background: '#fff' }} children={children}>
           <SiderDemo />

            <Layout >
                <Header style={{ background: '#fff', padding: 0 }}>
                    <HeaderContent />
                </Header>
                <Content style={{margin: 30}}>
                  {children}
                </Content>
            </Layout>
            
        </Layout>

    );
  }
}
export default MyLayout;