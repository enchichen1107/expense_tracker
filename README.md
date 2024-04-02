# Expense Tracker
- Fast & Simple的私房錢記帳本
- ps. Heroku app 已經匯入種子資料
<img src="https://github.com/enchichen1107/expense_tracker/blob/main/%E8%80%81%E7%88%B8%E8%A8%98%E5%B8%B3%E6%9C%AC.png" width="350">

## Features
1. 可以在首頁一次瀏覽所有支出的清單
2. 可以在首頁看到所有支出清單的總金額
3. 可以新增一筆支出
4. 可以編輯支出的所有屬性 (一次編輯一筆)
5. 可以刪除任何一筆支出 (一次刪除一筆)
6. 可以在首頁可以根據支出「類別」篩選支出；總金額的計算只會包括被篩選出來的支出總和
7. 可以註冊帳號

## Prerequisites
- node.js: 10.24.0
- express: 4.17.1
- express-handlebars: 5.3.2
- express-session: 1.17.1
- handlebars-dateformat: 1.1.1
- handlebars-helpers: 0.10.0
- method-override: 3.0.0
- mongoose: 5.12.13
- bcryptjs: 2.4.3
- connect-flash: 0.1.1
- passport: 0.4.1
- passport-facebook: 3.0.0
- passport-local: 1.0.0

## Installation and Execution
0. 確認已安裝node.js和npm
1. 打開terminal，clone此專案至本機
```
git clone https://github.com/enchichen1107/expense_tracker.git
```
2. 進入存放此專案的資料夾，terminal輸入
```
cd `專案資料夾路徑`
```
3. npm 安裝套件，terminal輸入
```
npm install 
```
4. 安裝 nodemon 套件，terminal輸入
```
npm install -g nodemon
```
5. 參考 .env.example，建立 .env檔案
6. 匯入種子資料，terminal輸入
```
npm run seed
```
7. 執行檔案，terminal輸入
```
npm run dev
當 terminal 出現以下字樣，表示伺服器已啟動並成功連結
App is running on http://localhost:8000
mongodb connected!
```

8. 登入可用下列預設帳密
```
name: 廣志
email: user1@example.com
password: 123

name: 小葵
email: user2@example.com
password: 321
```

