import React from 'react';
import axios from 'axios';

export default class FaceDemographic extends React.Component {
  state = {
    urls: '',
    results:'Please paste an image link into the box above'
  }

  handleChange = async event => {
    this.setState({ urls: event.target.value });
  }

  handleSubmit = async event => {
    event.preventDefault();
    console.log("test")/*
    const payload = {
      urls: [this.state.urls]
    };
    console.log(payload)
    axios.post(`http://ec2-34-201-161-82.compute-1.amazonaws.com//predict`, payload)
      .then(res => {
        console.log("in then")
        console.log(res);
        console.log(res.data);
      })
      */
     const json = JSON.stringify({ urls: [this.state.urls] });
      const res = await axios.post('http://ec2-34-201-161-82.compute-1.amazonaws.com/predict', json, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
       }
      });
      this.setState({results:`Age: ${res.data.age}, Gender: ${res.data.gender}`})

  }
  


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Image Url:
            <input type="text" name="url" onChange={this.handleChange} />
          </label>
          <button type="submit">Get Demographics</button>
        </form>
        <p>{this.state.results}</p>
      </div>
    )
  }
}