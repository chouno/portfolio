import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Shimogamodeli extends Component {
  render() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">戻る</Link>
                </li>
            </ul>
            <h1>Shimogamo</h1>
        </div>
    );
  }
}