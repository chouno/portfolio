import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DetailDescription } from "../componemt/DetailDescription";

export class Chronograph extends Component {
  render() {
    const frameworks = ['HTML','javaScript','jQuery','CSS']
    return (
      <div className="">
       <ul>
          <li>
              <Link to="/">戻る</Link>
          </li>
        </ul>
        <DetailDescription
          title='会社年表'
          frameworks={frameworks}
          captures={this.props.captures}
        />
      </div>
    );
  }
}