const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const db = require('./db');


const port = process.env.PORT || 9003;
const app = express();
app.use(cors(), bodyParser.json());

const fs = require('fs');

//Step 1. Get the schema in "string" format
//loading type definitions from schema file
const typeDefs = fs.readFileSync('./schema.graphql', { encoding: 'utf-8' });

//Step 2. Get the resolvers
const resolvers = require('./resolver');


//Step 3. Use the makeExecutableSchema from graph-tools & bind 
// schema + resolver (binding schema and resolver)
const { makeExecutableSchema } = require('graphql-tools');
const schema = makeExecutableSchema({typeDefs,resolvers});

//Step 4. Use apollo-server-express to serve the graphql routes _ enabling routes
const  {graphiqlExpress,graphqlExpress} = require('apollo-server-express')
app.use('/graphql',graphqlExpress({schema}))
app.use('/graphiql',graphiqlExpress({endpointURL:'/graphql'}))


//registering port
app.listen(
   port, () => console.info(
      `Server started on port ${port}`
   )
);
