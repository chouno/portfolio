import { createStore } from 'redux'

//Reducer
function reducer(state, action) {
  //Actionに応じて、処理分岐
  switch(action.type) {
    case 'ACT1':
      //新しいstateを作成
      //return先は、コンテナのprops変換処理かな？(未確認)
      return (
        Object.assign(
          {}                                  //空のオブジェクトに以下を追加
          , state                             //既存state
          , {count: Number(action.count) + 1} //別途変更がある箇所
        )
      );
    default:
      return state;
  }
}

const initialState = {
  count: 0
};

//Store定義(初期stateとReducerのセット)
export default createStore(reducer, initialState);
