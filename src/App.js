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
    data: { lati: 38.990794, long: -76.936972 },
    center: { lat: 38.990794, lng: -76.936972 },
  };

  componentDidMount() {
    this.loadData();
    this.checkCenter(this.state.data.lati, this.state.data.long);
    setInterval(this.loadData, 8000);
    setInterval(this.checkCenter, 8000);
    console.info('LOADED!');
  }
  
  loadData = () => {
    api.getData()
    .then((data) => {
      this.setState({data: data});
    })
    console.info(`Updated data.`)
  }

  checkCenter = () => {
    if(this.state.data.lati - this.state.center.lat > 0.001) {
         console.log("Change center");
         this.setState({
           center: {
             lat: this.state.data.lati,
             lng: this.state.data.long,
            }
         })
       };
  }

  render() {
    return (
      <div className="App">
        <Maps
          lat = {this.state.data.lati}
          lng = {this.state.data.long}
          center = {this.state.center}
        />
      </div>
    );
  }
}

export default App;