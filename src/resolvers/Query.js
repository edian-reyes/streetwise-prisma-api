const users = async (parent, args, ctx, info) => {
  return await ctx.db.query.users();
};

module.exports = {
  users
};
