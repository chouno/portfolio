import React, { Component } from 'react';
import  DetailDescription  from "../componemt/DetailDescription";

export class Shimogamodeli extends Component {
  render() {
    const data = {
      title:'設計・コーディング',
      appName:'下鴨デリ',
      link:'http://shimogamo-deli.com/',
      language:'HTML\nJavaScript\nCSS',
      frameworks:'jQuery',
      color:'#D6D177',
      description:'飲食店ホームページ作成において、画面設計とコーディングを担当しました\nFacebookAPIを利用し、投稿された最新のお知らせを表示します',
      captures:this.props.captures
    };
    return (
      <DetailDescription
        data={data}
      />
    );
  }
}