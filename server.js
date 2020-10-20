const bodyParser = require('body-parser');
const express = require("express")
const app = express();
const port = 3001

/* bids object struct
    [
        {name: 'String', bid: Float},
        {name: 'String', bid: Float},
        ...
        {name: 'String', bid: Float}
    ]
*/
let bids = []

app.use(bodyParser.json());
app.disable('etag');

app.get('/server-view-bids', (req, res) => {
    res.send(bids);
})

app.post('/server-send-bid', (req, res) => {
    if (req.body) {
        bids.push(req.body)
    }
})

app.listen(port, () => console.log("Servidor rodando local na porta " + port))