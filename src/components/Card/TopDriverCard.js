import { Avatar, Card, Col, Row, Typography } from 'antd';
import React from 'react';


const { Text } = Typography;

const TopDriver = (props) =>{

    return (
        <Card>
            <Row style={{paddingBottom: 25}}>
                <Text type="secondary">Top Drivers</Text>
            </Row>
            <Row style={{paddingBottom: 15}}>
                <Col span={4}>      
                    <Avatar size="large" icon="user" />
                </Col>
                <Col span={12}>
                    <Text strong>Bepop</Text> <br/>
                    <Text type="secondary">Volvo intellisafe</Text>
                </Col>
                <Col span={8} style={{textAlign: 'right'}}>
                    <Text strong>$6,432</Text> <br/>
                    <Text type="secondary">1,232 mi</Text>
                </Col>
            </Row>
            <Row style={{paddingBottom: 15}}>
                <Col span={4}>      
                    <Avatar size="large" icon="user" />
                </Col>
                <Col span={12}>
                    <Text strong>Bepop</Text> <br/>
                    <Text type="secondary">Volvo intellisafe</Text>
                </Col>
                <Col span={8} style={{textAlign: 'right'}}>
                    <Text strong>$6,432</Text> <br/>
                    <Text type="secondary">1,232 mi</Text>
                </Col>
            </Row>
            <Row style={{paddingBottom: 15}}>
                <Col span={4}>      
                    <Avatar size="large" icon="user" />
                </Col>
                <Col span={12}>
                    <Text strong>Bepop</Text> <br/>
                    <Text type="secondary">Volvo intellisafe</Text>
                </Col>
                <Col span={8} style={{textAlign: 'right'}}>
                    <Text strong>$6,432</Text> <br/>
                    <Text type="secondary">1,232 mi</Text>
                </Col>
            </Row>
            <Row style={{paddingBottom: 15}}>
                <Col span={4}>      
                    <Avatar size="large" icon="user" />
                </Col>
                <Col span={12}>
                    <Text strong>Bepop</Text> <br/>
                    <Text type="secondary">Volvo intellisafe</Text>
                </Col>
                <Col span={8} style={{textAlign: 'right'}}>
                    <Text strong>$6,432</Text> <br/>
                    <Text type="secondary">1,232 mi</Text>
                </Col>
            </Row>
            <Row style={{paddingBottom: 15}}>
                <Col span={4}>      
                    <Avatar size="large" icon="user" />
                </Col>
                <Col span={12}>
                    <Text strong>Bepop</Text> <br/>
                    <Text type="secondary">Volvo intellisafe</Text>
                </Col>
                <Col span={8} style={{textAlign: 'right'}}>
                    <Text strong>$6,432</Text> <br/>
                    <Text type="secondary">1,232 mi</Text>
                </Col>
            </Row>
            <Row style={{paddingBottom: 15}}>
                <Col span={4}>      
                    <Avatar size="large" icon="user" />
                </Col>
                <Col span={12}>
                    <Text strong>Bepop</Text> <br/>
                    <Text type="secondary">Volvo intellisafe</Text>
                </Col>
                <Col span={8} style={{textAlign: 'right'}}>
                    <Text strong>$6,432</Text> <br/>
                    <Text type="secondary">1,232 mi</Text>
                </Col>
            </Row>
            
            
        </Card>
    
    )
}
export default TopDriver;