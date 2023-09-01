const sequelize=require('./util/database');
const bodyParser=require('body-parser');
const express=require('express');
const app=express();
const cors=require('cors');
const route=require('./router/route');
app.use(cors());
app.use(bodyParser.json());
app.use(route);

sequelize.sync()
.then(()=> {
console.log('network logged on');
app.listen(4000);
})
.catch(err => console.log(err))