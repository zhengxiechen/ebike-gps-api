import React, { Component } from 'react';
import GPSApi from './api/gps_api.js';
import MapContainer from './MapContainer';
import { Sidebar } from './Sidebar';
import './App.css';
import { Fab, CssBaseline } from '@material-ui/core';
import { Menu } from '@material-ui/icons'

require('dotenv').config();
const api = new GPSApi();

class App extends Component {
  state = {
    data: { 
      lat: 38.990794, 
      lng: -76.936972,
    },
    center: { lat: 38.990794, lng: -76.936972 },
    showSidebar: true,
  };

  componentWillMount() {
    this.firstLoadData();
  }

  componentDidMount() {
    this.loadData();
    this.checkCenter(this.state.data.lat, this.state.data.lng);
    setInterval(this.loadData, 15000);
    setInterval(this.checkCenter, 15000);
  }

  handleToggle() {
    this.setState({ showSidebar: !this.state.showSidebar })
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
  }

  loadData = () => {
    api.getData()
    .then((data) => {
      this.setState({data: data});
    })
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
      <div className="root">
        <CssBaseline/>
        <div className="mapContainer">
          <MapContainer
            lat = {this.state.data.lat}
            lng = {this.state.data.lng}
            center = {this.state.center}
            showSidebar = {this.state.showSidebar}
          />
          <Fab 
            color="primary"
            style={{ position: 'absolute', right: 2, top: 55 }} 
            onClick={() => this.handleToggle()}> 
            <Menu /> 
          </Fab>
        </div>
        { this.state.showSidebar ? <Sidebar data={this.state.data}/> : null }
      </div>
    );
  }
}

export default App;