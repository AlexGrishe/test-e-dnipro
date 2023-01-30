const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const router = require('./routes');
app.use('/api', router.user_api);

app.get('/', (req, res) => {
    res.json({message: 'REST API'})
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
