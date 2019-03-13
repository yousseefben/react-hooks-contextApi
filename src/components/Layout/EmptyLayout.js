import './header.css';

import { Layout } from 'antd';
import React, { Component } from 'react';


const {
  Content
} = Layout;

class EmptyLayout extends Component {

  render() {
    const { children } = this.props;
    return (
        <Layout style={{ minHeight: '100vh', background: '#fff' }} children={children}>
           <Content>
               {children}
           </Content>
        </Layout>

    );
  }
}
export default EmptyLayout;