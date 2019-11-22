// //route for homepage
//   exports.showContactes('/',(req, res) => {
//     let sql = "SELECT * FROM contacts";
//     let query = conn.query(sql, (err, results) => {
//       if(err) throw err;
//       res.render('/contact',{
//         results: results
//       });
//     });
//   });
// };
// //route for insert data
//
//   exports.Contactadd('/save',(req, res) => {
//   let data = {first_name: req.body.first_name, last_name: req.body.last_name, contact_number: req.body.contact_number, email_address: req.body.email_address};
//   let sql = "INSERT INTO contacts SET ?";
//   let query = conn.query(sql, data,(err, results) => {
//     if(err) throw err;
//     res.redirect('/');
//   });
// });
//
// exports.get = ('/update',(req, res) => {
//   var Id = req.params.Id;
//   req.getConnection(function(err, connection){
//     let sql = "UPDATE contacts SET first_name='"+req.body.first_name+"', last_name='"+req.body.last_name+"', contact_number='"+req.body.contact_number+"', email_address='"+req.body.email_address+"' WHERE contacts_id="+req.body.id;
//     let query = conn.query(sql, (err, results) => {
//   if(err) throw err;
//   res.redirect('/');
// });
//   });
// };
//
// //route for delete data
// exports.delete('/delete',(req, res) => {
//   let sql = "DELETE FROM contacts WHERE contacts_id="+req.body.contacts_id+"";
//   let query = conn.query(sql, (err, results) => {
//     if(err) throw err;
//       res.redirect('/');
//   });
// });
