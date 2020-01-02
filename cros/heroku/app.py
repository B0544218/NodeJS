from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)  # __name__ 代表目前執行的模組
@app.route("/")  # 函式的裝飾 decorator:以函示為基礎 提供附加功能
def home():
    print("hello")
    return "Hello Flask"


@app.route("/test", methods=['POST'])  # 函式的裝飾 decorator:以函示為基礎 提供附加功能
def test():
    print('test')
    response = jsonify({'message': 'store  found'})
    # 對flask server進行跨域
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == "__main__":  # 如果以主程式執行
    app.run(host='127.0.0.1', port=3001)  # 立即啟動伺服器
    CORS(app)
