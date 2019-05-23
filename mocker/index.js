const delay = require("mocker-api/utils/delay");

// 是否禁用代理
const noProxy = process.env.NO_PROXY === "true";
console.log(noProxy);
const proxy = {
  "GET /api/getlist": (req, res) => {
    res.send({
      id: "abc",
      name: "温木",
      age: 29
    });
  },
  "GET /remote/getName": (req, res) => {
    res.send({
      id: "12345",
      name: "温木",
      age: 29
    });
  }
};
module.exports = noProxy ? {} : delay(proxy, 1000);
