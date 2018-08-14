import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { DetailDescription } from "../componemt/DetailDescription";

export class Dashboard extends Component {
  render() {
    const data = {
      title:'集計データの視覚化',
      frameworks:'jQuery\nAngularJS\nNodeJS\nunderscore.js\nhighcharts.js\namCharts.js',
      appName:'社内研修用年表',
      language:'HTML\nJavaScript\nCoffeeScript\nCSS',
      color:'#368DC3',
      main:0,
      description:'外食産業企業の売り上げ分析Webアプリケーションを実装しました\n'+
      '比較する条件を組織レベルから店舗レベルまで選択でき、\n'+
      '集計対象を地域、年代、性別等、用途に合わせた属性で絞り込めます\n\n'+
      '集計結果をCSVファイルとして出力\n'+
      '選択された集計条件をファイルとして登録し、他のユーザーと共有\n'+
      '',
      captures:this.props.captures
    };
    return (
      <DetailDescription
        data={data}
      />
    );
  }
}