import DataSet from '@antv/data-set';
import { Card, Row, Typography } from 'antd';
import { Axis, Chart, Geom, Legend, Tooltip } from 'bizcharts';
import React from 'react';
import './card.css'
const { Text } = Typography;
  const data = [
    {
      name: "Comfort",
    //   "Jan.": 18.9,
    //   "Feb.": 28.8,
    //   "Mar.": 39.3,
      "Apr.": 81.4,
      May: 47,
      "Jun.": 20.3,
    //   "Jul.": 24,
    //   "Aug.": 35.6
    },
    {
      name: "Premium",
    //   "Jan.": 12.4,
    //   "Feb.": 23.2,
    //   "Mar.": 34.5,
      "Apr.": 99.7,
      May: 52.6,
      "Jun.": 35.5,
    //   "Jul.": 37.4,
    //   "Aug.": 42.4
    }
  ];
  const ds = new DataSet();
  const dv = ds.createView().source(data);
  dv.transform({
    type: "fold",
    fields: ["Apr.", "May", "Jun."],
    key: "月份",
    value: "月均降雨量"
  });


const TypeTrips = (props) =>{

    return (
        <Card style={{paddingBottom: 10}}>
            <Row style={{paddingBottom: 25}}>
                <Text type="secondary">TRIPS BY TYPES</Text>
            </Row>
            <Row style={{paddingBottom: 15}}>
            <Chart height={312} data={dv} forceFit padding={[20, 80, 60, 30]}>
          <Axis name="月份" />
          <Axis name="月均降雨量" />
          <Legend />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom
            type="interval"
            position="月份*月均降雨量"
            color={"name"}
            adjust={[
              {
                type: "dodge",
                marginRatio: 0,
              }
            ]}   
            size={5}
        
          />
        </Chart> 
            </Row>
        </Card>
    
    )
}
export default TypeTrips;