const express = require("express")
import FoodFinder from "./services/food-finder"

const app = express()
const port = 3000

let foodFinder = new  FoodFinder()

app.get("/", (req, res) => {
  res.send("<div>Welcome to the food finder!</div>")
})

app.get("/file", (req, res) => {
  res.render("index", {
    title: "I am using pug!",
    message: "Woww this is what pug looks like. Its incredible."
  })
})

app.get("/search/:food", (req, res) => {
  res.send(foodFinder.findFood(req.parms.food))
})

app.set("title", "Food finder")

app.set("view engine", "pug")
app.set("views", "./out/views")

app.use(express.static("public"))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
