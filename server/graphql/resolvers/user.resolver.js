import userSchema from "../../model/user.schema.js";

const resolvers = {
  Query: {
    // Resolver to fetch all users
    getUsers: async () => {
      const users = await userSchema.find();
      return users;
    },

    // Resolver to fetch a user by ID
    getUserById: async (parent, { _id }) => {
      const user = await userSchema.findById(_id);
      return user;
    },
  },

  Mutation: {
    // Resolver to create a new user
    createUser: async (parent, { name, email, password }) => {
      const newUser = await userSchema.create({ name, email, password });
      return newUser;
    },

    // Resolver to update an existing user
    updateUser: async (parent, { _id, name, email, password }) => {
      const updatedUser = await userSchema.findByIdAndUpdate(
        _id,
        { name, email, password },
        { new: true }
      );
      return updatedUser;
    },

    // Resolver to delete a user
    deleteUser: async (parent, { _id }) => {
      const deletedUser = await userSchema.findByIdAndDelete(_id);
      return deletedUser !== null;
    },
  },
};

export default resolvers;