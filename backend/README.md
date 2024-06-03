# backend

# setup

Node.js & TypeScriptのプロジェクト作成  
https://typescript-jp.gitbook.io/deep-dive/nodejs  

```shell
プロジェクトの依存関係設定ファイルであるpackage.jsonをセットアップします。
素早くこれを行う方法はこれです
npm init -y

TypeScriptをインストールします
npm install typescript --save-dev

Node.jsのプログラムに必要な型宣言ファイルnode.d.tsをインストールします
npm install @types/node --save-dev

TypeScriptの設定ファイルtsconfig.jsonを初期化します
npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs
```

## 追加インストール
```shell
npm install express mssql reflect-metadata typeorm
```

# 開発向け起動

```
npm start
```

# 本番向けビルド＆起動

```
npm run build
node ./build/index.js
```
