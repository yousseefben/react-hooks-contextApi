import { Avatar, Card, Col, Row, Typography } from 'antd';
import React from 'react';
import './card.css'

const { Text } = Typography;

const TopDriver = (props) =>{

    return (
        <Card>
            <Row style={{paddingBottom: 25}}>
                <Text type="secondary">TOP DRIVERS</Text>
            </Row>
            <Row style={{paddingBottom: 15}}>
                <Col span={4}>      
                    <Avatar size="large" icon="user" />
                </Col>
                <Col span={12}>
                    <Text className="name">Bepop</Text> <br/>
                    <Text type="secondary">Volvo intellisafe</Text>
                </Col>
                <Col span={8} style={{textAlign: 'right'}}>
                    <Text >$6,432</Text> <br/>
                    <Text type="secondary">1,232 mi</Text>
                </Col>
            </Row>
            <Row style={{paddingBottom: 15}}>
                <Col span={4}>      
                    <Avatar size="large" icon="user" />
                </Col>
                <Col span={12}>
                    <Text className="name">Bepop</Text> <br/>
                    <Text type="secondary">Volvo intellisafe</Text>
                </Col>
                <Col span={8} style={{textAlign: 'right'}}>
                    <Text >$6,432</Text> <br/>
                    <Text type="secondary">1,232 mi</Text>
                </Col>
            </Row>
            <Row style={{paddingBottom: 15}}>
                <Col span={4}>      
                    <Avatar size="large" icon="user" />
                </Col>
                <Col span={12}>
                    <Text className="name">Bepop</Text> <br/>
                    <Text type="secondary">Volvo intellisafe</Text>
                </Col>
                <Col span={8} style={{textAlign: 'right'}}>
                    <Text >$6,432</Text> <br/>
                    <Text type="secondary">1,232 mi</Text>
                </Col>
            </Row>
            <Row style={{paddingBottom: 15}}>
                <Col span={4}>      
                    <Avatar size="large" icon="user" />
                </Col>
                <Col span={12}>
                    <Text className="name">Bepop</Text> <br/>
                    <Text type="secondary">Volvo intellisafe</Text>
                </Col>
                <Col span={8} style={{textAlign: 'right'}}>
                    <Text >$6,432</Text> <br/>
                    <Text type="secondary">1,232 mi</Text>
                </Col>
            </Row>
            <Row style={{paddingBottom: 15}}>
                <Col span={4}>      
                    <Avatar size="large" icon="user" />
                </Col>
                <Col span={12}>
                    <Text className="name">Bepop</Text> <br/>
                    <Text type="secondary">Volvo intellisafe</Text>
                </Col>
                <Col span={8} style={{textAlign: 'right'}}>
                    <Text >$6,432</Text> <br/>
                    <Text type="secondary">1,232 mi</Text>
                </Col>
            </Row>
            <Row style={{paddingBottom: 15}}>
                <Col span={4}>      
                    <Avatar size="large" icon="user" />
                </Col>
                <Col span={12}>
                    <Text className="name">Bepop</Text> <br/>
                    <Text type="secondary">Volvo intellisafe</Text>
                </Col>
                <Col span={8} style={{textAlign: 'right'}}>
                    <Text >$6,432</Text> <br/>
                    <Text type="secondary">1,232 mi</Text>
                </Col>
            </Row>
            
            
        </Card>
    
    )
}
export default TopDriver;