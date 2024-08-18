const connectToMongo = require("./db")
connectToMongo();

const express = require('express')
var cors = require('cors')
const app = express();

app.use(cors())

app.use(express.json())

app.use('/message', require("./routes/message"))

app.get('/', (req, res) => {
    res.send('hello world')
    
})

  
  app.listen(5000);
