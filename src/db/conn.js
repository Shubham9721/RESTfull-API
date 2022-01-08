const mongoose = require("mongoose");

 module.exports = mongoose.connect("mongodb://127.0.0.1:27017/olymics", {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection successful");
}).catch((e) => {
    console.log("no connection", e);
})