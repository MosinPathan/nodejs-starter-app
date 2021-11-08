const express = require('express');
const app = express();

// specify default engine
app.set('view engine', 'ejs');

// To server static content like styles
app.use(express.static('public'));

app.get('/', (req, res) =>
    // renders text only
    //res.send('Hello World!'));

    // Renders views/index.js
    res.render('index')
)
// server will listen on http://localhost:3000/
app.listen(3000, () => console.log('app running'))