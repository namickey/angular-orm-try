# backend ( TypeORM + WEBAPI )

# create new project

```shell
npx typeorm init --name backend --database mssql

cd backend

npm install
```

# DB connection 

```data-source.ts```  
```ts
import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "localhost",
    port: 1433,
    username: "sa",
    password: "Passw0rd",
    database: "hellodb",
    options: {
        trustServerCertificate: true, // エラー「self signed certificate」が出た場合はこれを追加
    },
    synchronize: true, // テーブルがない場合は自動で作成する。本番環境では使わない
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
```

# run application

```shell
npm start
```
