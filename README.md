TDD Boot Camp 2020 Online #1 基調講演/ライブコーディング  
https://www.youtube.com/watch?v=Q-FJ3XmFlT8&t=1145s  
と、Clean Craftsmanship に影響を受けて TypeScript / Jest のお勉強してみる。

### 環境構築で参考にしたサイト

https://typescript-jp.gitbook.io/deep-dive/nodejs

ts-jest だけでうまくいく？不要な babel を混ぜてしまったかもしれない。  
https://qiita.com/mktu/items/d36416baba155dfecc00

commonJS とか ES6 とかを babel でいい感じになるように設定が必要。  
https://qiita.com/riversun/items/6c30a0d0897194677a37

他にもいろいろありそう。@babel/preset-typescript を忘れてたかな。  
https://jestjs.io/docs/getting-started#using-typescript

---

```
npm test -- --coverage --watchAll=false
```

も見てみる。watch を無効化しないとカバレッジ結果出力中に  
テストが走り出して結果が消えてしまう様子。

---

Jest mock spy については
https://qiita.com/s_karuta/items/ee211251d944e72b2517
を参考にした。

---

環境構築完了版  
git clone https://github.com/moke039/tstdd.git -b v0.0.1  
FizzBuzz 完了版  
git clone https://github.com/moke039/tstdd.git -b v0.1.0

vs code がちょっと不安定になることもある。
ctrl(cmd)+shift+p -> reload Window がおすすめ。
