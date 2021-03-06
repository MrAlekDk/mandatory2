import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

import path from "path";
app.use(express.static(path.resolve("../client/french-boutique/public")));


import itemsRouter from "./routes/items.js";
app.use(itemsRouter);
import {authRouter, authToken} from "./routes/auth.js";
app.use(authRouter);
import emailRouter from "./routes/emailer.js";
app.use(emailRouter);


app.post("/dashboard", authToken, (req,res)=>{
  if(req.user){
    console.log("You are authorized")
    res.sendFile(path.resolve("../client/french-boutique/public/index.html"))
  }
  else{
    res.redirect("/")
  }
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve("../client/french-boutique/public/index.html"))
  })

app.listen(PORT,()=>{
    console.log("Now running on port",PORT)
});