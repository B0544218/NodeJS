import sys
import json

# 把字串做成json格式
print("這是Python code:")
# JS傳過來的數據
print(sys.argv[1])
obj2 = {"b": 2}
print(json.dumps(obj2), end="")
