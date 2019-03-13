import { Card, Col, Row, Typography } from 'antd';
import React, { Component } from 'react';

import LoginFrom from './LoginForm';

const { Text } = Typography;

class LoginPage extends Component {


    render() {
        return (
            <div>
                <Col span={12}>
                    <Card style={{ height: '100vh'}}>
                        <Col span={12} offset={6} style={{marginTop: '25%'}}>
                            <Row style={{marginBottom: 20}}>
                                <Text style={{fontSize: 20}}>Sign in to Velocity</Text><br/>
                                <Text type="secondary">Please enter your credentials to proceed.</Text>
                            </Row>
                            <LoginFrom />
                    </Col>
                    </Card>

                   
                </Col>
                <Col span={12}>
                    <img src="/login.jpg" style={{height: '100vh'}} width="100%" alt="splash" />
                </Col>
            </div>
        )
    }
}

export default LoginPage;