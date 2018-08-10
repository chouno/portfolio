import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Chronograph extends Component {
  render() {
    return (
      <div className="">
       <ul>
          <li>
              <Link to="/">戻る</Link>
          </li>
        </ul>
        <h1>chrono</h1>
      </div>
    );
  }
}