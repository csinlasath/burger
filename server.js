const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controllers");
var PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);

app.listen(PORT, function() {
  console.log("Web App now listening at localhost:" + PORT);
});

