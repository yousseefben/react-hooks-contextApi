import React, { Component } from 'react';
import { Col, Row, Card, Icon } from 'antd';
import { Typography } from 'antd';
import GaugeTick from './Chart/Gauge';
import DataSet from './Chart/DataSet';
import Series from './Chart/DataSet';
import './overview.css'
import TopDriver from './Card/TopDriverCard';
import TypeTrips from './Card/TypeTrips';
import ServiceReminder from './Card/ServiceReminder';
import { SourceMapConsumer } from '../../../../../Library/Caches/typescript/3.3/node_modules/source-map/source-map';
import SimpleMapPage from './Maps/MapsOverview';
import MapsOverviewCard from './Card/MapOverviewCard';

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
                           <Card>
                               <Row>
                                <Text type="secondary"> VEHICLES ON TRACK</Text>
                               </Row>
                               <Row style={{marginTop: 16}}>
                                <Text style={{fontSize: 29, lineHeight:1.1, fontWeight: '300'}}>1,428 cars</Text>
                               </Row>
                               <Row style={{paddingBottom: 16, marginTop: 10}}>
                                <Text style={{fontSize: 24}} type="danger"><Icon type="fall" /> -7.6%</Text>
                               </Row>
                           </Card>
                    </Col>
                    <Col span={11} offset={2}>
                         <Card>
                               <Row>
                                <Text type="secondary"> DISTANCE DRIVEN</Text>
                               </Row>
                               <Row style={{marginTop: 16}}>
                                <Text style={{fontSize: 29, lineHeight:1.1, fontWeight: '300'}}>158.3 mi</Text>
                               </Row>
                               <Row style={{paddingBottom: 16, marginTop: 10}}>
                                <Text style={{fontSize: 24, color: "#52c41a"}} ><Icon type="rise" /> +2.4%</Text>
                               </Row>
                           </Card>
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
                   <MapsOverviewCard />
                </Col>
            </Row>
            <Row style={{marginTop: 30}}>
                <Col span={7} offset={1}>
                    <TopDriver />
                </Col>
                <Col span={7} offset={1}>
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