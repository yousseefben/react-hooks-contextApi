import React from 'react';
import { Col, Row, Card, Avatar } from 'antd';
import { Typography } from 'antd';
import SimpleMapPage from '../Maps/MapsOverview';
import './card.css'


const { Text } = Typography;

const MapsOverviewCard = (props) =>{

    return (
        <Card className="card-map">
            <Row style={{paddingBottom: 25, paddingLeft: 20}}>
                <Text type="secondary">FLEET ACTIVITY MAP</Text>
            </Row>
            <Row style={{paddingBottom: 0, height: 400}}>
                <SimpleMapPage />
            </Row>
            
        </Card>
    
    )
}
export default MapsOverviewCard;