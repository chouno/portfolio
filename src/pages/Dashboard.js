import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { DetailDescription } from "../componemt/DetailDescription";

export class Dashboard extends Component {
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
          title='分析用ダッシュボード(サンプル)'
          frameworks={frameworks}
          captures={this.props.captures}
        />
      </div>
    );
  }
}