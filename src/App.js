import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: '',
      countryCode: ''
    }
  }
  getGeoInfo = () => {
    axios.get('https://ipapi.co/json/').then((response) => {
      let data = response.data;
      console.log(response)
      this.setState({
        countryName: data.country_name,
        countryCode: data.country_calling_code
      });
    }).catch((error) => {
      console.log(error);
    });
  };
  componentDidMount() {
    this.getGeoInfo();
  }

  render() {
    return (
      <div>
        <p>Country Name: {this.state.countryName}</p>
        <p>Country Code: {this.state.countryCode}</p>
      </div>
    )
  }
}
