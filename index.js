import  express from "express";
import bodyParser from "body-parser"



const app = express()
const porta = 3000
app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/" , (req, res ) => {
    res.render("index.ejs")
})

app.post("/submit" , (req, res) => {
    const luz = req.body["luz"]
    const agua = req.body["agua"]
})

app.listen( porta, () => {
    console.log(`ouvindo na porta ${porta}`)
})
