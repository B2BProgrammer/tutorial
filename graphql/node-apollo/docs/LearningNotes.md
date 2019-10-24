### Graph QL Notes

- Developed from Facebook


-- In Apollo Server

Problems with REST 

- resource oriented,  (Over fetch of data will happen)
- route can become lengthy,
- Numerous calls may be requrired to perform 1 operation.


. GraphQL structures data in the form of a graph with its powerful query syntax for traversing, retrieving, and modifying dataFlowin



Following Steps :

Step 5 : Data Access Layer
Step 6 : schema.graphql
Step 7 : Create Resolver File, resolvers.js
Step 8 : Create Server.js and Configure GraphQL

Server-Side Components
Sr.No.	Server Essentials & Description
1	
Schema

A GraphQL schema is at the center of any GraphQL server implementation and describes the functionality available to the clients which connect to it.

2	
Query

A GraphQL query is the client application request to retrieve data from database or legacy API's.

3	
Resolver

Resolvers provide the instructions for turning a GraphQL operation into data. They resolve the query to data by defining resolver functions.


Client-side Components
Given below are the client-side components −

Sr.No.	Tool & Description
1	
GraphiQL

Browser based interface for editing and testing GraphQL queries and mutations.

2	
ApolloClient

Best tool to build GraphQL client applications. Integrates well with all javascript front-end.


Server Side :

1. Construct a query
2. Create a schema for query
3. Write the resolver for "query" + implementation of each attribute in Query







/**
This is the Query -->
// Input Eg 1 :

query myQuery($myname_Variable:String!, $color_variable:ColorType) {
   sayHello(name:$myname_Variable)
   setFavouriteColor(color:$color_variable)
     students{
      id
      firstName
      college {
         id
         name
         location
         rating
      }
   }
  
}


// QueryVariables
{
   "myname_Variable": "Ajith",
    "color_variable": "BLUE"
} 



Query Section
// Input Eg 2 :
mutation doSignUp($input:SignUpInput) {
   signUp(input:$input)
}


{
   "input":{
      "email": "abc@abc.com",
      "firstName": "kannan",
      "password": "pass@1234"
   }
}

