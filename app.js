const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');

const graphqlSchema = require('./graphql/schema/index');
const graphqlResolvers = require('./graphql/resolvers/index');

const app= express();


app.use(bodyParser.json());

//middleware 
//single endpoint

//manual coded function similar to populate 


app.use('/graphql',graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql :true       

}));

const MONGOURI =  `mongodb+srv://yashrajdesai:x0OavZ1Vc4LQWgZZ@cluster0.d4sd0.mongodb.net/events?retryWrites=true&w=majority`;



mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    },
    (err)=>{
        if(!err) {
            app.listen(3000,()=>{
                console.log("Server running");
            });
        }else{
            console.log(err);
        }
    }
)

   
   

