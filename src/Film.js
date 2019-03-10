import React, { Component } from 'react';
import './Film.css';

class Film extends Component {
    render() {
        return (
            <div className ="film-component">
              <style>
               @import url('https://fonts.googleapis.com/css?family=Overpass');
              </style>
              <img className = "pic" src={this.props.pic} alt = "" height="380" width="650"/>
              <div className = "text">
                <div className = "title">{this.props.title}</div>
                <div className = "release-date">{this.props.date}</div>
                <div className = "description">{this.props.description}</div>
              </div>
            </div>
        )
      }
}

export default Film;