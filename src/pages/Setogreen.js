import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Setogreen extends Component {
  render() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">戻る</Link>
                </li>
            </ul>
            <h1>Setogreenの説明</h1>
        </div>
    );
  }
}