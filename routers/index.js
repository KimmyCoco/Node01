const indexPage = (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello Node!</h1>");
    res.write("<a href='read-message'>Read Message</a><br>");
    res.write("<a href='write-message'>Write Message</a>");
    res.end();
};
module.exports = indexPage;
