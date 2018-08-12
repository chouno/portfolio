import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { DetailDescription } from "../componemt/DetailDescription";

const language = ['HTML','javaScript','CSS']
const frameworks = []
const description = ['ローカルのTTFファイルをブラウザに読み込み(ドラッグ&ドロップ)  WOFF,eot,svgファイルを生成し、ダウンロードできるwebアプリケーション']

export class Shimogamodeli extends Component {
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
              title='下鴨デリ'
              frameworks={frameworks}
              captures={this.props.captures}
              description={description}
            />
          </div>
        );
      }
}