## window
- 下載NODE
- node -v檢查安裝
- 檢查npm install -g express-generator可不可以執行
- express -v檢查安裝 (如果沒有就代表npm install -g路徑跑掉了，這時再到program files的nodejs看看有沒有node_global)
- ctrl+~ 開啟terminal
- ctrl+B 開啟左邊專欄
- 創建express模板 express -e projectname 
- 到project中進行npm install(製造出node_module)
- 如果要執行的話在project的根目錄打 node 或 node ./bin/www
### 如果express跑掉 參照以下步驟
- 在以下路徑創建目錄
  1. C:\Program Files\nodejs\node_global
  2. D:\Program Files\nodejs\node_cache  
- 設置環境變數
  1. 添加 使用者變數設置:  C:\Program Files\nodejs\node_global 
  2. 添加 系統變數設置:  C:\Program Files\nodejs\node_modules
- 打開cmd執行
  1. npm config set prefix "C:\Program Files\nodejs\node_global"  
  2. npm config set cache "C:\Program Files\nodejs\node_cache"
- 打開系統管理員 執行npm install express -g ，查看node_global 文件
## 連接mysql
#### 第一次使用
  - 到mysql command line client使用: ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '密碼';
  - 成功後，在執行: FLUSH PRIVILEGES;
```
// npm install mysql
var mysql = require('mysql');
var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root'
});
connection.connect();
connection.end();
```
#### 查詢mysql
```
router.get('/', function(req, res, next) {
  var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'demo'
  });
  
  connection.connect();
  connection.query('select * from transactions', function (error, results, fields) {
    if (error) throw error;
    console.log(JSON.parse( JSON.stringify(results) ) );
  });
  connection.end();
});
```

## Ubuntu
- sudo apt-get install nodejs
- sudo apt-get install npm
- npm init -y (製作package)
- npm install express
