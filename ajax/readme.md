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
