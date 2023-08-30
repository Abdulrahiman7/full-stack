const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');

const app=express();

const cors=require('cors');
const sequelize=require('./util/database');
const pageRoute=require('./routers/register');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname)))
app.use(pageRoute);

sequelize.sync()
.then(()=>{
    console.log('listening started')
    app.listen(4000);
})
.catch(err => console.log(err))
