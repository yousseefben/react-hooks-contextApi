import React from 'react';
import { Col, Row, Card, Avatar } from 'antd';
import { Typography } from 'antd';


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
                <Col span={13}>
                    <Text strong>Bepop</Text> <br/>
                    <Text type="secondary">Volvo intellisafe</Text>
                </Col>
                <Col span={7} style={{textAlign: 'right'}}>
                    <Text strong>$6,432</Text> <br/>
                    <Text type="secondary">1,232 miles</Text>
                </Col>
            </Row>
            <Row style={{paddingBottom: 15}}>
                <Col span={4}>      
                    <Avatar size="large" icon="user" />
                </Col>
                <Col span={13}>
                    <Text strong>Bepop</Text> <br/>
                    <Text type="secondary">Volvo intellisafe</Text>
                </Col>
                <Col span={7} style={{textAlign: 'right'}}>
                    <Text strong>$6,432</Text> <br/>
                    <Text type="secondary">1,232 miles</Text>
                </Col>
            </Row>
            <Row style={{paddingBottom: 15}}>
                <Col span={4}>      
                    <Avatar size="large" icon="user" />
                </Col>
                <Col span={13}>
                    <Text strong>Bepop</Text> <br/>
                    <Text type="secondary">Volvo intellisafe</Text>
                </Col>
                <Col span={7} style={{textAlign: 'right'}}>
                    <Text strong>$6,432</Text> <br/>
                    <Text type="secondary">1,232 miles</Text>
                </Col>
            </Row>
            <Row style={{paddingBottom: 15}}>
                <Col span={4}>      
                    <Avatar size="large" icon="user" />
                </Col>
                <Col span={13}>
                    <Text strong>Bepop</Text> <br/>
                    <Text type="secondary">Volvo intellisafe</Text>
                </Col>
                <Col span={7} style={{textAlign: 'right'}}>
                    <Text strong>$6,432</Text> <br/>
                    <Text type="secondary">1,232 miles</Text>
                </Col>
            </Row>
            <Row style={{paddingBottom: 15}}>
                <Col span={4}>      
                    <Avatar size="large" icon="user" />
                </Col>
                <Col span={13}>
                    <Text strong>Bepop</Text> <br/>
                    <Text type="secondary">Volvo intellisafe</Text>
                </Col>
                <Col span={7} style={{textAlign: 'right'}}>
                    <Text strong>$6,432</Text> <br/>
                    <Text type="secondary">1,232 miles</Text>
                </Col>
            </Row>
            <Row style={{paddingBottom: 15}}>
                <Col span={4}>      
                    <Avatar size="large" icon="user" />
                </Col>
                <Col span={13}>
                    <Text strong>Bepop</Text> <br/>
                    <Text type="secondary">Volvo intellisafe</Text>
                </Col>
                <Col span={7} style={{textAlign: 'right'}}>
                    <Text strong>$6,432</Text> <br/>
                    <Text type="secondary">1,232 miles</Text>
                </Col>
            </Row>
            
        </Card>
    
    )
}
export default TopDriver;