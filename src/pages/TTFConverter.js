import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { DetailDescription } from "../componemt/DetailDescription";

const language = ['HTML','javaScript','CSS']
const frameworks = []


export class TTFConverter extends Component {
  render() {
    const data = {
      title:'Webフォント生成',
      frameworks:'',
      appName:'TTFConverter',
      language:'HTML\nJavaScript\nCSS',
      color:'#333',
      main:1,
      description:'ローカルのTTFファイルをブラウザにドラッグ&ドロップ\n解析したデータからwoff、eot、svg、CSSファイルを生成し、Zip圧縮\nダウンロードまでをJavaScriptでコントロールするWebアプリケーション',
      captures:this.props.captures
    };
    return (
        <DetailDescription
          data={data}
        />
    );
  }
}