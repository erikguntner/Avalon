import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
const key = 'AIzaSyBlUZ3kZLh-Hq6wa9F6dh7EEETsVbIO0cY';


const Map = compose(
  withProps({
    googleMapURL:
      `https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `300px`, 'width': `50%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={15} defaultCenter={{ lat: 33.993, lng: -118.473 }}>
    <Marker position={{ lat: 33.993, lng: -118.473 }} />
  </GoogleMap>
));

export default Map;
