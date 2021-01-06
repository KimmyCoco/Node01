const indexPage = require("./routers/index");
const readMessagePage = require("./routers/read-message");
const writeMessagePage = require("./routers/write-message");

const router = (req, res)=> {
    //console.log(req);
    if (req.url === "/") {
        indexPage(req, res);
    }
    if (req.url === "/read-message") {
        readMessagePage(req, res);
    }
    if (req.url === "/write-message") {
        writeMessagePage(req, res);
    }
};
module.exports = router;