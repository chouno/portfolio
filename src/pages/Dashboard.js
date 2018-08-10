import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Dashboard extends Component {
  render() {
    return (
      <div className="">
       <ul>
          <li>
              <Link to="/">戻る</Link>
          </li>
        </ul>
        <h1>dashboard</h1>
      </div>
    );
  }
}