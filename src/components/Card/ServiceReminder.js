import React from 'react';
import { Col, Row, Card, Avatar, Checkbox } from 'antd';
import { Typography } from 'antd';
import './card.css'

const { Text } = Typography;

const ServiceReminder = (props) =>{

    return (
        <Card style={{paddingBottom: 27}}>
            <Row style={{paddingBottom: 25}}>
                <Text type="secondary">Service Reminders</Text>
            </Row>
            <Row style={{paddingBottom: 15}}>
                <Checkbox className="check-rem">Vehicle <strong>#11183</strong></Checkbox>
                <Text code className="due">DUE TODAY</Text>
            </Row>
            <Row style={{paddingBottom: 15}}>
                <Checkbox className="check-rem">Vehicle <strong>#11183</strong></Checkbox>
                <Text code className="due">DUE TODAY</Text>
            </Row>
            <Row style={{paddingBottom: 15}}>
                <Checkbox className="check-rem">Vehicle <strong>#11183</strong></Checkbox>
                <Text code className="due">DUE TODAY</Text>
            </Row>
            <Row style={{paddingBottom: 15}}>
                <Checkbox className="check-rem">Vehicle <strong>#11183</strong></Checkbox>
                <Text code className="due">DUE TODAY</Text>
            </Row>
            <Row style={{paddingBottom: 15}}>
                <Checkbox className="check-rem">Vehicle <strong>#11183</strong></Checkbox>
                <Text code className="due">DUE TODAY</Text>
            </Row>
            <Row style={{paddingBottom: 15}}>
                <Checkbox className="check-rem">Vehicle <strong>#11183</strong></Checkbox>
                <Text code className="due">DUE TODAY</Text>
            </Row>
            <Row style={{paddingBottom: 15}}>
                <Checkbox className="check-rem">Vehicle <strong>#11183</strong></Checkbox>
                <Text code className="due">DUE TODAY</Text>
            </Row>
            
        </Card>
    
    )
}
export default ServiceReminder;