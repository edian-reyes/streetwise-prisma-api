const rp = require("request-promise");

const users = async (parent, args, ctx, info) => {
  const options = {
    uri: "https://api.radar.io/v1/users",
    headers: {
      Authorization: process.env.RADAR_TEST_SECRET_KEY
    },
    json: true
  };

  const res = await rp(options);
  console.log(res);

  return await ctx.db.query.users();
};

module.exports = {
  users
};
