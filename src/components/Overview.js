import './overview.css';

import { Card, Col, Row, Typography } from 'antd';
import React, { Component } from 'react';

import InfoCard from './Card/InfoOverviewCard';
import MapOver from './Card/MapOver';
import ServiceReminder from './Card/ServiceReminder';
import TopDriver from './Card/TopDriverCard';
import TypeTrips from './Card/TypeTrips';
import Series from './Chart/DataSet';
import GaugeTick from './Chart/Gauge';

const { Text } = Typography;

class Overview extends Component {


    render() {
        return (
            <div style={{marginTop: 40, marginBottom: 40}}>
            <Row>
              <Col span={9} offset={1}>
                <Card>
                    <Row>
                        <Col span={12} style={{padding: 10}}>
                            <GaugeTick />
                        </Col>
                        <Col span={12} style={{paddingTop: 30}}>
                            <Row>
                                <Text style={{fontSize: 28, lineHeight:1.1, fontWeight: '300'}}>Welcome <br/> to Velocity</Text>
                            </Row>
                            <Row style={{marginTop: 10}}>
                                <Text style={{ lineHeight:1.1, fontWeight: '300'}} type="secondary">All cars are operating well. There were 1,233 trips since your last login.</Text>
                            </Row>
                        </Col>
                    </Row>
                </Card>
                <Row style={{marginTop: 30}}>
                    <Col span={11}>
                           <InfoCard title="VEHICLES ON TRACK" nombre="-7.6" stats="1,428 cars"/>
                    </Col>
                    <Col span={11} offset={2}>
                        <InfoCard title="DISTANCE DRIVEN" nombre="2.4" stats="158.3 mi"/>
                    </Col>
                </Row>
              </Col>
           
              <Col span={12} offset={1}>
                <Card className="dataset-card">
                    <Text style={{fontSize: 22, lineHeight:1.1, fontWeight: '300'}}> Today's Trips</Text>
                    <Row style ={{paddingBottom:0}}>
                        <Series />
                    </Row>
                </Card>
                
              </Col>
            </Row>
            <Row style={{marginTop: 30}}>
                <Col span={22} offset={1}>
                   <MapOver />
                </Col>
            </Row>
            <Row style={{marginTop: 30}}>
                <Col span={7} offset={1}>
                    <TopDriver />
                </Col>
                <Col span={6} offset={1}>
                    <TypeTrips />
                </Col>
                <Col span={7} offset={1}>
                    <ServiceReminder />
                </Col>
            </Row>
        </div>
        )
    }
}

export default Overview;