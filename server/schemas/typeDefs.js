const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    password: String
    savedBooks: [Books]
  }
  type Book {
    _id: ID!
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
  }
  type Mututation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: String!): User
    removeBook(bookId: ID!): User
  }
`;
module.exports = typeDefs;
