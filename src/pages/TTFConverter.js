import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { DetailDescription } from "../componemt/DetailDescription";

const language = ['HTML','javaScript','CSS']
const frameworks = []


export class TTFConverter extends Component {
  render() {
    const data = {
      title:'TTFConverter',
      frameworks:[],
      language:'HTML\nJavaScript\nCSS',
      description:'ローカルのTTFファイルをブラウザにドラッグ&ドロップ\n解析したデータからwoff、eot、svg、CSSファイルを生成\nダウンロードまでをJavaScriptでコントロールするWebアプリケーション',
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