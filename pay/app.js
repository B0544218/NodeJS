const app = require("express")();
const uuid = require("uuid/v4");

const LinePay = require("line-pay-v3");

const linePay = new LinePay({
  channelId: "",
  channelSecret: "",
  uri: "https://sandbox-api-pay.line.me"
});

let nonce = uuid();
const order = {
  amount: 4000,
  currency: "TWD",
  orderId: "Order2019101500001",
  packages: [
    {
      id: "Item20191015001",
      amount: 4000,
      name: "testPackageName",
      products: [
        {
          name: "testProductName",
          quantity: 2,
          price: 2000
        }
      ]
    }
  ],
  redirectUrls: {
    confirmUrl: "https://example.com/confirmUrl",
    cancelUrl: "https://example.com/cancelUrl"
  }
};

linePay.request(order).then(res => {
  console.log(res);
});
