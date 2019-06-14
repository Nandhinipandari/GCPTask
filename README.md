# GCPTaskDatastore App Engine (standard)

For fetching the records of all customers and with particular customer uding their id's,a program has been created in the NodeJs with datastore and executed successfully.

Below is the sample outcome

Sample record:

      {"result":[{"Last Name":"Einstein","id":"100","First Name":"Albert"},{"First Name":"Micheal","Last Name":"Jackson","id":"103"}]}

Functions

/getCustomers
https://future-shuttle-243610.appspot.com/getallcustomers


This displays all records in the datastore

/getCustomerId
https://future-shuttle-243610.appspot.com/getcustomer?id=103


Fetches the records matching id={"id"}
