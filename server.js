const express = require('express');
const hbs = require('hbs');

const app = express();
app.set('View Engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('currentYear', ()=>{
    return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text)=>{
    return text.toUpperCase();
});
app.use(express.static(__dirname + '/public'));


app.get('/about', (req, res)=>{
    res.render('about.hbs',{
        pageTitle: 'About page',
        homeText: 'About everything you want.',
    });
});
app.get('/',(req, res)=>{
    res.render('index.hbs',{
        pageTitle: 'Home Page',
        homeText: 'This is the home content'
   
    });
});

app.get('/', (req, res)=>{
      res.send({
          name: 'José'
      });
});

app.listen(port = 3000, (e) => {
    console.log(`Server started on port ${port}`);
});