import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { DetailDescription } from "../componemt/DetailDescription";

export class Setogreen extends Component {
    render() {
      const data = {
        title:'不動産物件検索エンジン',
        frameworks:'jQuery',
        language:'HTML\nJavaScript\nCSS',
        description:'地域に根ざした瀬戸グリーン不動産のWebページ\nGoogleMapAPIを利用し、地図からの物件検索も可能です',
        captures:this.props.captures
      };
      return (
        <div className="">
          <ul>
            <li>
                <Link to="/">戻る</Link>
            </li>
          </ul>
          <DetailDescription
            data={data}
          />
        </div>
      );
    }
}