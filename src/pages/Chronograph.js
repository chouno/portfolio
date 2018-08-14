import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DetailDescription } from "../componemt/DetailDescription";

export class Chronograph extends Component {
  render() {
    const data = {
      title:'3Dアニメーション',
      frameworks:'jQuery\nD3.js\nunderscore.js',
      appName:'社内研修用年表',
      language:'HTML\nJavaScript\nCSS',
      main:1,
      color:'#333',
      description:'社内研修用の年表Webサービスを3Dで表現しました\n事案に参加したメンバー、関係のあるライブラリ(フレームワーク等)をダイアグラムで表示し、\n関係性の軸をメンバーやフレームワークに切り替えることが可能です',
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