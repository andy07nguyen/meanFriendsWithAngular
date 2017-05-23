let express = require("express");
let app = express();
const path = require("path");
let bodyParser = require("body-parser");
const mongoose = require('./server/config/mongoose.js');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// Define the Static Folder:
app.use(express.static(__dirname + '/public/dist'));
app.use(express.static(path.join(__dirname, './bower_components')));

// var tasks = [{name: "Kermit", color:"green"}, {name: "Miss Piggy", color: "pink"}, {name: "Gonzo", color: "blue"}];
// Read All

var routes = require('./server/config/routes.js')(app);

// For Angular Routing
app.get('*', (req, res) => {
    res.sendFile(path.resolve('public/dist/index.html'));
})
app.listen(8000, () => {
    console.log("Listening on 8000")
});
