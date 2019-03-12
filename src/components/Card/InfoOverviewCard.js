import { Card, Row, Typography, Icon } from 'antd';
import React from 'react';
import './card.css'
const { Text } = Typography;



const InfoCard = (props) =>{

    return (
        <Card className="info-card">
              <Row className="row-1">
                 <Text type="secondary"> {props.title}</Text>
              </Row>
              <Row className="row-2">
                <Text>{props.stats} %</Text>
              </Row>
              <Row className="row-3">
                <Text type="danger"><Icon type="fall" /> {props.nombre}</Text>
              </Row>
        </Card>
    
    )
}
export default InfoCard;