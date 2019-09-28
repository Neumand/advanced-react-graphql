const Mutations = {
  // TODO: Check if they are logged in.
  async createItem(parent, args, ctx, info) {
    // We spread the arguments here instead of assigning data to args, since we need to assign a user to this later.
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args,
        },
      },
      info,
    );
    return item;
  },
};

module.exports = Mutations;
