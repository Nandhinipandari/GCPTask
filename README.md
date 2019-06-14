# GCPTaskDatastore App Engine (standard)

You can see the output and make API calls in the Nodejs code below:

https://github.com/Nandhinipandari/GCPTask

Sample record:

      {"result":[{"Last Name":"Einstein","id":"100","First Name":"Albert"},{"First Name":"Micheal","Last Name":"Jackson","id":"103"}]}

Functions

/getCustomers
https://future-shuttle-243610.appspot.com/getallcustomers


This displays all records in the datastore

/getCustomerId
https://future-shuttle-243610.appspot.com/getcustomer?id=103


Fetches the records matching id={"id"}
