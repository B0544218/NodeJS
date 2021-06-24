#### 基本ajax指令
```
$.ajax({
    url: '',                        // url位置
    type: 'post',                   // post/get
    data: { querytag: data },       // 輸入的資料
    error: function (xhr) { },      // 錯誤後執行的函數
    success: function (response) { }// 成功後要執行的函數
});

例子:
$.ajax({
url:'https://ruienyuski.github.io/git_test/data.json',
success:function(response){
$('.info').html('抓到資料囉!');
},
error:function(xhr){
alert("發生錯誤: " + xhr.status + " " + xhr.statusText);
}
 });
```

### html
```
html頁面程式碼：
<img id="imgPic" src="{{ url_for('static') }}" onclick="Show(this)" style="width:300px;height:270px;"/>
```
### JS
```
function Show(el){
  var data= {
                data: JSON.stringify({
                    'x': 1,
                    'y': 2
                }),
            }
          $.ajax({
            url:"{{ url_for('img_operate') }}",
            type:"post",
            data:data,
            dataType: 'json',
            success:function(data){
                 //成功後的一些操作

            },
            error:function(e){
                 alert("error");
            }
        })
  }
```
### flask
```
@app.route('/img_operate', methods=['POST'])
def img_operate():
    data = json.loads(request.form.get('data'))
    x = data['x']
    y = data['y']
    print(x)
    print(y)
    return jsonify({"success": 200,  "x": x, "y": y}) #也可以用render_template
```

