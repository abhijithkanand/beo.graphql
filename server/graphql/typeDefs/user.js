import { gql } from "apollo-server-express"
export const user = gql`
type User {
  _id: ID
  name: String!
  email: String!
  password: String!
}`

export const query = gql`
type Query {
  getUsers: [User!]!
  getUserById(_id: ID!): User
}`

export const mutation = gql`
type Mutation {
  createUser(name: String!, email: String!, password: String!): User!
  updateUser(_id: ID!, name: String, email: String, password: String): User!
  deleteUser(_id: ID!): Boolean!
}`