import express from "express";

const app = express();

const middleWare = (req, res, next) => {
    console.log("I'm the middleWare!")
    next();
}

const handleHome = (req, res) =>{
    return res.send("답장 보낸다. ㅋ");
};

app.get("/",middleWare, handleHome);

app.listen(4000, () => console.log("Server On 4000 Port"));