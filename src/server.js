import express from "express";

const app = express();

const middleWare = (req, res, next) => {
    console.log("I'm the middleWare!")
    next();
}

const handleHome = (req, res) =>{
    return res.send("답장 보낸다. ㅋ");
};

const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if (url === "/protected"){
        return res.send("<h1>Not Allowed</h1>");
    }
    console.log("Allowed, you may continue.");
    next();
};

const handleProtected = (req,res) => {
    return res.send("비밀 공간인데 어떻게 들어왔지?")
}

app.use(middleWare);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);


app.listen(4000, () => console.log("Server On 4000 Port"));