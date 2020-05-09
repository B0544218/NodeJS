## GitHub 簡易教學

#### Window DOS指令
```
▼ 查看當下路徑 檔案列表
dir

▼ 刷新指令視窗
cls (註: 在Git Bash中 是clear)

▼ 切換到下一個資料夾路徑
cd (folder name)

▼ 切換到上一個資料夾路徑
cd ..
```


#### Git Bash指令 (簡易教學 以master為主)
```
▼ 在該路徑下創建一個 .git檔 才可使用git指令(隱藏狀態)
git init

▼ 查看 目前與遠端GitHub的連線狀態
(顯示結果 : fetch: 從哪個GitHub用戶抓下來 push: 上傳到哪個GitHub用戶)
git remote -v

▼ 新增 一個連線狀態
git remote add origin 網址

▼ 從某個Github用戶 抓下來檔案
git pull origin master

▼ 查看 目前路徑下有沒有檔案更新 (更新的檔案有沒有放入存檔點)
git status

▼ 將路徑下全部檔案(這裡用.) 放入虛擬存檔點
git add .

▼ 命名 存檔點
git commit -m "存檔點名稱"

▼ 上傳到某個GitHub用戶
(如果發生error可能是 電腦上的存檔點結構與GitHub網站的存檔點結構不同)
git push origin master

```

![image](https://github.com/B0544218/NodeJS/blob/master/GitHub_history.JPG)
```
▼ 更改 歷史紀錄
(commitID 可以去GitHub網站上的history查詢)
git reset --hard <commitID>

▼ 上傳到某個GitHub用戶
(完全覆蓋GitHub網站上的存檔點結構 以自己電腦上的存檔點結構為主)
git push -f origin master
```
## 如果用 private repo
- 去個人檔案的settings > Developer setting > personal access token > 產生token()
- git clone https://<token>@github.com/owner/repo.git

