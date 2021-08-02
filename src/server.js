import express from "express";

const app = express();

const handleHome = (req, res) =>{
    return res.send("답장 보낸다. ㅋ");
};

app.get("/",handleHome);

app.listen(4000, () => console.log("Server On 4000 Port"));