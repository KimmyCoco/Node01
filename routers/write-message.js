const writeMessagePage = (req, res) => {
    if (req.method === "POST") {
        let data = "";
        req.on("data",(packets)=>{
            console.log({packets});
            data += packets;
        });
        req.on("end", ()=>{
            console.log({data});
            const messageContent = data.split("=")[1];
            const fs = require("fs");

            fs.appendFileSync("./messages", messageContent + "\n");

            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(`<h1>${messageContent}</h1>`);
            res.end();
        });
        return;
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Write Message</h1>");
    res.write(`
    <form action="write-message" method="POST">
      <input name="message" type="text">
      <input type="submit">
    </form>
    `);
    res.end();
};
module.exports = writeMessagePage;