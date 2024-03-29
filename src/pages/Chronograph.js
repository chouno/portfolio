import React, { Component } from 'react';
import DetailDescription from "../componemt/DetailDescription";

export class Chronograph extends Component {
  componentDidMount(){
    // window.scrollTo(0,0);
  }
  render() {
    const data = {
      title:'3Dアニメーション',
      frameworks:'jQuery\nD3.js\nunderscore.js',
      language:'HTML\nJavaScript\nCSS',
      main:1,
      color:'#333',
      description:'社内研修用の年表Webサービスを3Dで表現しました\n事案に参加したメンバー、関係のあるライブラリ(フレームワーク等)をダイアグラムで表示し、\n関係性の軸をメンバーやフレームワークに切り替えられるようにしました',
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