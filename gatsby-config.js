module.exports = {
  plugins: [
    `gatsby-plugin-ramda`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout/layout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
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
          "@img": "src/img",
        },
        extensions: ["js"],
      },
    },
  ],
}
