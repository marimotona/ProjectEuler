# 
"Mathematically efficient"

## code_009 
・他の書き方<br>
・ピタゴラスの定理で、なぜ成り立つか<br>
    a = 2 * n + 1;<br>
    b = 2 * n * (n +1);<br>
    c = 2 * n * (n +1) + 1;

## code_011
・もう一度解きなおす 

## code_012
・約数を数えるときは、Math.sqrt()で確認すると、計算量がO(√N)になる<br>
しかし、約数をカウントするときに、この方法だと、約数の半分しかカウントができない<br>
約数のカウント方法に注意する

## code_013

#### reduce
reduceは、配列の要素を左から右に処理し、単一の値に累積するために使用する<br>
最終的な計算結果を返す<br>
reduce関数に渡される、resは累積変数でそれぞれの反復で結果が更新される

#### map
mapは、配列のすべての要素に対して関数を適用し、その結果から新しい配列を生成するために使用する<br>
関数を適用した新たな配列を返す

## code_014
・iを直接操作すると、無限ループになる<br>
また同じ初期値を使用するため、同じ数列を生成するすることになる<br>
変数の値が変更されても、ループの制御に使われる条件式や回数のカウントが<br>変化しないから、無限ループに陥る

## code_015
再帰での階乗の計算<br>
例えば、num=4の時<br>
num * factorial(num - 1)<br>
4 * factorial(3)<br>
3 * factorial(2)<br>
2 * factorial(1)<br>
retuurn 1<br>
<br>
つまり、4 * 3 * 2 * 1になる<br>

動的計算法（dynamic programming）<br>
漸化式を利用して、次々に途中までの解を記録していき<br>
最終的に解を求める方法

## code_017
答えが合わない、条件式のところ再考する

## code_018
もう一度

## code_019
初期値の設定が重要<br>
日曜日になる条件を考える<br>
規則性が難しかった

## code_020
値が大きすぎるときの処理<br>
BigIntのままではなく、そろえる必要もある<br>
通常の数値とBigInt同士は計算ができない

## code_020
条件式のところ<br>
先に計算を実行し、それを記録しておくことで計算時間を減らす<br>
メモ化しておく<br>
メモ化してアクセスするところが難しかった

## code_020
txtファイルを読み込むと、一つの文字列として返す

## code_023
Setで重複をしないようにする

## code_028
4つの対角線の規則性に注目する

## code_029
比較的解きやすい気がする<br>
setオブジェクトの使い方

## code_031
DP、むずかしい

## code_032
その要素を含んでいるか → includes<br>
sortは文字列、数値型に使えない、配列にのみ使える

## code_033
もう一度、説明できるようにする

## code_034
OK!<br>
factoriaの再帰

## code_035
高階関数

## code_037
再帰呼び出しが深くなりすぎると、スタックオーバーフローが生じる

## code_038
9桁の数を作成するため、最小で4桁の数字でなくてはいけない<br><br>

----- safe ----<br>
9999 * 1 = 9999<br>
9999 * 2 = 19998<br>

9-digits<br><br>
----- out -----<br>
99999 * 1 = 99999<br>
99999 * 2 = 199998<br>

10-digits

## code_039
条件式の範囲を効率よく絞ることができるか


## code_041
先にpandigitalを作成する<br>
pandigitals生成のところ難しかった<br>

### Array.from

・文字列を配列に変換
const str = "hello";<br>
const arr = Array.from(str);<br>
console.log(arr); // ['h', 'e', 'l', 'l', 'o']<br>

・配列を生成し、各要素に適用する関数を設定
const arr = Array.from({ length: 5 }, (_, i) => (i + 1) * 2);<br>
console.log(arr); // [2, 4, 6, 8, 10]<br>

### slice

slice(indexStart, indexEnd)<br>
str.slice(1, 4) --> 1, 2, 3  //indexEndは含まない

### concat
二つの要素を連結して新たな配列を作成する<br>

const digits = [1, 2, 3, 4, 5];<br>
const i = 2;<br><br>

const newDigits = digits.slice(0, i).concat(digits.slice(i + 1));<br>
console.log(newDigits); // [1, 2, 4, 5]<br>

## code_042
code_42とcode_22は似ている

## code_043
0 ~ 9の組み合わせを生成するところ難しい

## code_044

### 線形検索 O(n)
includesメソッドは、配列内の要素を一つずつ調べていくため、実行速度が遅い<br>
配列の長さが大きいと時間がかかる<br>
データ構造の最初から最後まで要素を順番に調べる<br>
検索対象が見つかるまで、要素を一つ一つ調べていく<br>
要素数が多い場合、検索時間が長くなる可能性がある<br>

### ハッシュベース検索 O(1)
Setオブジェクトは、ハッシュテーブルを用いてデータを格納する<br>
ハッシュ関数を使用し、インデックスを検索する<br>
検索対象の格納位置をピンポイントで参照することができる


## code_045

### 2次方程式　解の公式
a * x^2 + b * x + c = 0<br>

x = (-b ± sqrt(b^2 - 4ac)) / 2a

## code_046
もう一度やりたい<br>
エラトステネスの篩

### return
関数を終了し関数の呼び出し元にいく<br>
ループだけではなく、関数そのものから脱出<br>
### break
ループ、switch文の終了<br>

for (let i = 1; i <= 10; i++) {<br>
  if (i === 5) {<br>
    break;<br>
  }<br>
  console.log(i);<br>
}<br>
→ 1, 2, 3, 4

### continue
次の繰り返しからループを再開<br>

for (let i = 1; i <= 10; i++) {<br>
  if (i === 5) {<br>
    continue<br>
  }<br>
  console.log(i);<br>
}<br>
→ 1, 2, 3, 4, 6, 7, 8, 9, 10 

## code_047
素因数分解<br>
素数の積に分解すること<br>
要素を一つ一つ確認するのではなく、サイズで考える<br>
数列がテーマ？？

## code_048
BigInt<br>
mod 効率的に余りを求めることができる<br>
余りを考える<br>
modの使い方

## code_049
それが順列かどうかを判断するには？