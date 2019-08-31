module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `xk9ptuv91tg5`,
        accessToken: "bta3W1CfXiouxIcvPv8ldigBhZImdeazZzth4mjA42Y",
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": "src/components",
          "@pages": "src/pages",
          "@context": "src/context",
        },
        extensions: ["js"],
      },
    },
  ],
}
