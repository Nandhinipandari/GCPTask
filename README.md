# GCPTaskDatastore App Engine (standard) API

You can see the output and make API calls in the python notebook below: https://colab.research.google.com/github/iampawanpoojary/datastoreAPI/blob/master/datastoreAPI.ipynb

Sample record:

      {"result":[{"Last Name":"Einstein","id":"100","First Name":"Albert"},{"First Name":"Micheal","Last Name":"Jackson","id":"103"}]}

Functions

/getCustomers
https://future-shuttle-243610.appspot.com/getallcustomers


This displays all records in the datastore

/getCustomerId
https://zimablue.appspot.com/getCustomerId?id=101


Fetches the records matching id={"id"}
