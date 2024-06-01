import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
const express = require("express");

AppDataSource.initialize().then(async () => {

    const app = express();


    // START 開発向け。テーブルを作成して初期データを1件登録する
    const user = new User()
    user.firstName = "鈴木"
    user.lastName = "太郎"
    user.age = 25
    await AppDataSource.manager.clear(User) // 次回起動したときに重複登録しないようにクリアする
    await AppDataSource.manager.save(user)
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)
    // END  開発向け


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
