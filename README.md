# Expense Tracker
- Fast & Simple的老爸私房錢記帳本
- Check it out!! 👉 https://evening-cove-87255.herokuapp.com/
<img src="老爸的記帳本.png" width="30">

## Features
1. 老爸可以在首頁一次瀏覽所有支出的清單
2. 老爸可以在首頁看到所有支出清單的總金額
3. 老爸可以新增一筆支出
4. 老爸可以編輯支出的所有屬性 (一次編輯一筆)
5. 老爸可以刪除任何一筆支出 (一次刪除一筆)
6. 老爸可以在首頁可以根據支出「類別」篩選支出；總金額的計算只會包括被篩選出來的支出總和

## Prerequisites
- Node.js: 10.24.0
- Express: 4.17.1
- Express-handlebars: 5.3.2
- Handlebars-dateformat: 1.1.1
- Handlebars-helpers: 0.10.0
- Method-override: 3.0.0
- Mongoose: 5.12.13

## Installation and Execution
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
5. 匯入種子資料，terminal輸入
```
npm run seed
```
6. 執行檔案，terminal輸入
```
npm run dev
```
當 terminal 出現以下字樣，表示伺服器已啟動並成功連結
App is running on http://localhost:3000
mongodb connected!

