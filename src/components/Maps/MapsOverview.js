import GoogleMap from 'google-map-react';
import React, { Component, PropTypes } from 'react';

import Marker from './Marker';


// import MyGreatPlace from './my_great_place.jsx';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

function createMapOptions(maps) {
  // next props are exposed at maps
  // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
  // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
  // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
  // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
  // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
  return {
    zoomControlOptions: {
      position: maps.ControlPosition.RIGHT_CENTER,
      style: maps.ZoomControlStyle.SMALL
    },
    mapTypeControlOptions: {
      position: maps.ControlPosition.TOP_RIGHT
    },
    mapTypeControl: true
  };
}

export default class SimpleMapPage extends Component {
  static defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };


  constructor(props) {
    super(props);
  }

  render() {
    return (
       <GoogleMap
        // apiKey={'AIzaSyBWDTbwhTJaWqKWlPf2BdbQRpVz7J03Sng'} api code here
        center={this.props.center}
        zoom={this.props.zoom}
        options={createMapOptions}>
        <Marker lat={59.955413} lng={30.337844} text={'.'} />
        <Marker {...this.props.greatPlaceCoords} text={'.'} />
      </GoogleMap>
    );
  }
}