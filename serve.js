const express = require('experss');
const app = express();
const port = 5000;
app.get('/',(req,res)=>{
    res.send("Hello");
});
app.listen(port,()=>{
    console.log(`Server is ruunug on port ${port}`);
});