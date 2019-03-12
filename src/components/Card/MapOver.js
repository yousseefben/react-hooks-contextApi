import { Card, Typography, Row } from 'antd';
import * as React from 'react';
import ReactMapboxGl, { Feature, Layer } from 'react-mapbox-gl';

  
  // tslint:disable-next-line:no-var-requires
  // const { token, styles } = require('./config.json');
  // tslint:disable-next-line:no-var-requires
  const Mapbox = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoieW91c3NlZmJlbiIsImEiOiJjanQ1cXAwaTAwMmt4NGFuenkxcWJnbTYwIn0.r-38m6OcNK3xK-pmwzhL8w"
  });
  const POSITION_CIRCLE_PAINT = {
    'circle-stroke-width': 1,
    'circle-radius': 30,
    'circle-blur': 0,
    'circle-color': '#0B6BF2',
    'circle-stroke-color': '#0B6BF2',
    'circle-opacity': 0.15
  };
  
  const { Text } = Typography;

  
  const MapOver = (props) =>{
      return (
        <Card className="card-map">
            <Row style={{paddingBottom: 15, paddingLeft: 16}}>
                <Text type="secondary">FLEET ACTIVITY MAP </Text>
            </Row>
            <Mapbox
              style="mapbox://styles/mapbox/streets-v9"
              center = {[2.296780, 48.880768]}
              zoom={[15]}
              containerStyle={{
                height: "350px",
                width: "100%"
              }}>
                <Layer
                  type="circle"
                  id="marker"
                  paint={POSITION_CIRCLE_PAINT}>
                  <Feature key="1" coordinates={ [2.296780, 48.880768]}/>
                  <Feature key="2" coordinates={ [2.293476, 48.880239 ]}/>
                </Layer>
            </Mapbox>
        </Card>
        
      );
    }

  
  export default MapOver;
  