import React from 'react';
import data from './data';
import {Link} from 'react-router';

var Services = React.createClass({

  render: function() {
      console.log(this.props.params)
      return (
      <div id="service">
          <li><Link to="front">Front </Link></li>
          <li><Link to="back">Back </Link></li>
          <li><Link to="management">Management </Link></li>
          <h2>Home of the Attractive Distracted Developers</h2>
          {this.props.children}
      </div>
    )
  }
});
export default Services;