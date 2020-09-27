const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send('thank for calling me..yay')
})

app.listen(4200,()=>console.log('this port is 4200'))