const express = require('express');
const {Datastore} = require('@google-cloud/datastore');
const datastore = new Datastore();
const app = express();
// [START hello_world]
// Say hello!
app.get('/getallcustomers', (req, res) => {
  //res.status(200).send('Hello, world!');
    try {
      res.setHeader("Content-Type", "application/json");
      //Check for sac no
      
      let namespace="demo-Customer";
          let kind = "customer";
          //let custid="1";
         //let lastname="Einstein";
          //let firstname= "albert";
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
// [END hello_world]

app.get('/getcustomer', (req, res) => {
  //res.status(200).send('Hello, world!');
    try {
      res.setHeader("Content-Type", "application/json");
      //Check for sac no
      
      let namespace="demo-Customer";
          let kind = "customer";
      let id = req.param("id");
          //let custid="1";
         //let lastname="Einstein";
          //let firstname= "albert";
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