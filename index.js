const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const videoRoute = require("./Routes/videoRoute")

require("dotenv").config();
const port = process.env.PORT || 3000; 


app.use(express.json()); // is a middleware help to alow and send json data
app.use(cors()); 

app.use('/video',videoRoute);

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const url = process.env.ATLAS_URI;
mongoose.connect(url).then(()=>{console.log("conneced")}).catch((error)=>{console.log(error)})
