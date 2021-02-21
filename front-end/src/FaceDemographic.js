import React from 'react';
import axios from 'axios';

export default class FaceDemographic extends React.Component {
  state = {
    urls: '',
  }

  handleChange = event => {
    this.setState({ urls: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const payload = {
      urls: this.state.urls
    };

    axios.post(`http://ec2-54-236-24-242.compute-1.amazonaws.com//predict`, { payload })
      .then(res => {
        console.log("in then")
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="url" onChange={this.handleChange} />
          </label>
          <button type="submit">Get Demographics</button>
        </form>
      </div>
    )
  }
}