var express = require("express");
var spawn = require("child_process").spawn;
var iconv = require("iconv-lite");

var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});
router.post("/pass_test", function(req, res, next) {
  console.log("entry pass_test");
  console.log("前端傳給後端的參數: ", req.body.front_param);

  //B0544218 鄭凱元
  // async function promise_test() {
  // const variable1 = await new Promise(resolve => {
  //   resolve([1, 2, 3]);
  // });
  // const variable2 = await new Promise(resolve => {
  //   resolve([4, 5, 6]);
  // });
  //   const variable3 = variable1.concat(variable2);
  //   return variable3;
  // }
  // promise_test().then(value => {
  //   console.log(value);
  // });

  var obj1 = { a: 1 };
  var process = spawn("python", ["helloworld.py", JSON.stringify(obj1)]);
  process.stdout.on("data", function(data) {
    //var str_clean = data.split("\r\n") .join("");
    var str = iconv.decode(data, "big5");
    console.log(
      str
        .toString()
        .replace(/\r\n/g, ",")
        .split(",")
    );
  });

  res.status(200).json({
    //後端回傳給前端
    back_param: req.body.front_param
  });
});
module.exports = router;
