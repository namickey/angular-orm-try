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

# setup webapi
```
npm install express
```

## index.tsを実装する
```ts
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
const express = require("express");

AppDataSource.initialize().then(async () => {
    const app = express();
    app.get("/users", async (req, res) => {
        try {
            const allUsers = await AppDataSource.manager.find(User);
            res.json(allUsers);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    });

    app.listen(3000, () => {
        console.log(`Server is running on port 3000`);
    });

}).catch(error => console.log(error))
```

# run application

```shell
npm start
```

http://localhost:3000/users

## 以下のjsonが取得される
```json
[
    {
        "id": 1,
        "firstName": "鈴木",
        "lastName": "太郎",
        "age": 25
    }
]
```