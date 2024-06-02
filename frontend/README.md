# Frontend

# create new project

```shell
ng new frontend --ssr

cd frontend
```

# 参考

vscodeでエラー`tslib cannot be found`が発生する場合の対応  
https://stackoverflow.com/questions/52801814/this-syntax-requires-an-imported-helper-but-module-tslib-cannot-be-found-wit  


# 開発環境向けアプリ起動

```shell
ng serve
```

`http://localhost:4200/`


# 本番環境向けBuild

```shell
ng build
  or
ng build --configuration=production
```

`./dist/server/`に資材が生成される

# 本番環境向け起動

`node`で`server.mjs`を起動する  
```shell
node ./dist/frontend/server/server.mjs
```

`http://IPアドレス:4000/`
  or  
(`http://localhost:4000/`)
