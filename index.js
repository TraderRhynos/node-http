
const express = require('express')
const { localsAsTemplateData } = require('hbs')

const app = express()
const port = 3000


app.set("view engine" , "hbs");



app.get ("/portfoliopage",(req,res) =>{
    console.log(req.query);
    res.render('index')
    
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// http://localhost:3000/portfoliopage?name=jacob -link