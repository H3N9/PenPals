
const {ApolloServer, gql} = require('apollo-server')


const typeDefs = gql`
    type Query{
        text:String
    }
`

const resolvers = {
    Query:{
        text:() => "Hello"
    }
}

const server = new ApolloServer({typeDefs, resolvers})
server.listen({port: 3000}).then(({url}) => console.log(`Server runing ${url}`))