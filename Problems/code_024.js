let count = 0;
const target = 1000000;

function permutation(arr, prefix = []) {
  if (arr.length === 0) {
    count++;

    if (count === target) {
      console.log(parseInt(prefix.join('')));
      return true;
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      const curr = arr[i];
      const remain = arr.slice(0, i).concat(arr.slice(i + 1));

      if (permutation(remain, prefix.concat(curr))) {
        return true;
      }
    }
  }

  return false;
}

const inputArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//permutation(inputArray);



//

function makeOrder( list ){

    //要素がなければ並び順は作れない
    if( list.length === 0 ){
      return null;
    }
  
    //再帰にありがちな固定return
    if( list.length === 1 ){
      return [ [ list[0] ] ];
    }
  
    var result = [], //生成された並び順を格納する配列
  
        //一時変数 ループ中の先頭要素
        head,
  
        //一時変数 ループ内で破壊的にlistを弄りたいため
        cloneList;
    for( var i = 0 , n = list.length; i<n ; i++ ){
  
      //listをクローン
      cloneList = list.concat([]);
  
      //準々に先頭要素を交代していく
      head = cloneList.splice( i,1 );
  
      //先頭要素以外で全ての並び順を生成する (再帰)
      remainList = makeOrder( cloneList );
  
      //生成されたルートに先頭要素を足す
      for( var j = 0 , m = remainList.length ; j<m ; j++ ){
        remainList[j].unshift( head[0] );
        result.push( remainList[j] );
      }   
    }
  
    console.log(result);
    return result;
  }

  makeOrder([0,1,2]);