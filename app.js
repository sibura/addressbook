const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

// const contactRoutes = require('./routes/contacts');


//Create Connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'phonebook'
});

//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});



//set views file
app.use(express.static('public'));
// app.use(myConnection(mysql, dbOptions, 'single'));
app.engine('handlebars', exphbs(__dirname + '/views'));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //route for homepage
app.get('/',(req, res) => {
  let sql = "SELECT * FROM contacts";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.render('contact',{
      results: results
    });
  });
});
//
//route for insert data
app.post('/save',(req, res) => {
  let data = {first_name: req.body.first_name, last_name: req.body.last_name, contact_number: req.body.contact_number, email_address: req.body.email_address};
  let sql = "INSERT INTO contacts SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});

//route for update data
app.post('/update',(req, res) => {
  let sql = "UPDATE contacts SET first_name='"+req.body.first_name+"', last_name='"+req.body.last_name+"', contact_number='"+req.body.contact_number+"', email_address='"+req.body.email_address+"' WHERE contacts_id="+req.body.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});

//route for delete data
app.post('/delete',(req, res) => {
  let sql = "DELETE FROM contacts WHERE contacts_id="+req.body.contacts_id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.redirect('/');
  });
});


// app.get('/', contactRoutes.list);
// app.get('/', contactRoutes);


//app.listen(3000);
var port = process.env.PORT || 8100;
app.listen(port, function() {
console.log("Listening on " + port);
});
