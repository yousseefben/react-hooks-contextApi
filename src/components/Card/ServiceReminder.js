import './card.css';

import { Card, Checkbox, Row, Typography } from 'antd';
import React from 'react';

const { Text } = Typography;

const ServiceReminder = (props) =>{

    return (
        <Card style={{paddingBottom: 20}} className="service-card">
            <Row style={{paddingBottom: 25}}>
                <Text type="secondary">SERVICE REMINDERS</Text>
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
            <Row style={{paddingBottom: 15}}>
                <Checkbox className="check-rem">Vehicle <strong>#11183</strong></Checkbox>
                <Text code className="due">DUE TODAY</Text>
            </Row>
            
        </Card>
    
    )
}
export default ServiceReminder;