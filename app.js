const express = require('express');
const app = express();
app.set('view engine', 'ejs');

const path = require('path');

// const db = require('./util/database');

const mongoos = require('mongoose');

app.set('views', 'views');

const bodyParser=require("body-parser");

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ 
    extended: false
}));

app.use(express.static('views'));
 app.use(express.static(path.join(__dirname,'public')));



const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

const userRoutes = require('./routes/user');


app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use(userRoutes);

mongoos
    .connect('mongodb+srv://rider:Mohan007@node-serwb.mongodb.net/Fitness?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
        .then(result =>{
            console.log('Connected');
            
    app.listen(3001);
}).catch(err => {
    console.log(err);
});




