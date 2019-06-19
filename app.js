const express = require('express');
const {Datastore} = require('@google-cloud/datastore');
const datastore = new Datastore();
const app = express();

 app.get('/', (req, res) => {
  res.status(200).send('Welcome to Datasore-AppEngine Demo-v2!');
});

//getting the customer details
app.get('/getallcustomers', (req, res) => {
  
    try {
      res.setHeader("Content-Type", "application/json");
          
      let namespace="demo-Customer";
          let kind = "customer";
      const query = datastore.createQuery(namespace, kind);
      datastore.runQuery(query, (err, result) =>{
        if(result.length > 0){
          res.status(200).send(JSON.stringify({"result": result})).end();
        }else{
          res.status(200).send(JSON.stringify({ result: "No record found for kind customer." }));  
        }
      });
    } catch (error) {
      res.status(400).send(JSON.stringify({ result: "Something went wrong. " + error })); 
    }  
});
// getting customer details according to the id passed by the user
app.get('/getcustomer', (req, res) => {

    try {
      res.setHeader("Content-Type", "application/json");
      
      let namespace="demo-Customer";
          let kind = "customer";
      let id = req.param("id");
      //passing the id of the customer to get details
      const query = datastore.createQuery(namespace, kind).filter('id', '=', id);
      datastore.runQuery(query, (err, result) =>{
        if(result.length > 0){
          res.status(200).send(JSON.stringify({"result": result})).end();
        }else{
res.status(200).send(JSON.stringify({ result: "No record found from customer kind."+req.param("id") }));  
        }
      });
    } catch (error) {
      res.status(400).send(JSON.stringify({ result: "Something went wrong. " + error })); 
    }  
});

if (module === require.main) { 
  // [START server]
  // Start the server
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}

module.exports = app;
