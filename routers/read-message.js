const fs = require("fs");

const readMessagePage = (req, res) => {
    const data = fs.readFileSync("./messages", {encoding:'utf8', flag:'r'});
    const messages = data.split("\n").join("<br>");

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Read Message</h1>");
    res.write(messages);
    res.end();
};
module.exports = readMessagePage;