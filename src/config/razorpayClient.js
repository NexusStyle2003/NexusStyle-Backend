const Razorpay = require('razorpay');

apiKey="rzp_test_MXfHOznaAvJ4YV"
apiSecret="FMCGyXy6WY7ThZvLJEQoAdqU"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;