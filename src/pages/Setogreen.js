import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { DetailDescription } from "../componemt/DetailDescription";
export class Setogreen extends Component {
    render() {
      const data = {
        title:'物件検索エンジン',
        language:'HTML\nJavaScript\nCSS',
        frameworks:'jQuery',
        appName:'瀬戸グリーン不動産',
        main:2,
        color:'#16A085',
        link:'http://shimogamo-deli.com/',
        description:'不動産のWebページを作成しました\nGoogleMapAPIを利用し、地図から物件を検索できます',
        captures:this.props.captures
      };
      return (
        <div className="">
          <DetailDescription
            data={data}
          />
        </div>
      );
    }
}