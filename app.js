const express=require('express');
const app=express();

const bodyParser=require('body-parser');
const cors=require('cors');
const route=require('./routers/route')

app.use(bodyParser.json());
app.use(cors());
app.use(route);

const sequelize=require('./util/database')

sequelize.sync()
.then(()=>{
    app.listen(4000);
})
.catch(err => console.log(err))