import React, {Component} from 'react';

import {markerStyle} from './Marker_style';

export default class Marker extends Component {


  static defaultProps = {};


  constructor(props) {
    super(props);
  }

  render() {
    return (
       <div style={markerStyle}>
          {this.props.text}
       </div>
    );
  }
}