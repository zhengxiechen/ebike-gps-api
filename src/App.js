import React, { Component } from 'react';
import MockApi from './api/__mocks__/mock_api.js';
import GPSApi from './api/gps_api.js';
import Maps from './MapContainer';

require('dotenv').config();
const API_KEY = process.env.REACT_APP_API_KEY;
//const api = new MockApi();
const api = new GPSApi();

class App extends Component {
  state = {
    data: { lat: 38.990794, lng: -76.936972 },
    center: { lat: 38.990794, lng: -76.936972 },
  };

  componentWillMount() {
    this.firstLoadData();
  }

  componentDidMount() {
    this.loadData();
    this.checkCenter(this.state.data.lat, this.state.data.lng);
    setInterval(this.loadData, 10000);
    setInterval(this.checkCenter, 10000);
    console.info('LOADED!');
  }
  
  firstLoadData = () => {
    api.getData()
    .then((data) => {
      this.setState({
        data: data,
        center: {
          lat: data.lat,
          lng: data.lng,
        }
      });
    })
    console.info(`Loaded data.`)
  }

  loadData = () => {
    api.getData()
    .then((data) => {
      this.setState({data: data});
    })
    console.info(`Updated data.`)
  }

  checkCenter = () => {
    if(this.state.data.lat - this.state.center.lat > 0.001) {
         console.log("Change center");
         this.setState({
           center: {
             lat: this.state.data.lat,
             lng: this.state.data.lng,
            }
         })
       };
  }

  render() {
    return (
      <div className="App">
        <Maps
          lat = {this.state.data.lat}
          lng = {this.state.data.lng}
          center = {this.state.center}
        />
      </div>
    );
  }
}

export default App;