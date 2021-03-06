require("dotenv").config({ path: `.env.${process.env.NODE_ENV}`, });

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "onahs_blog",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "x8qJfPvX-p-TacfxOEqMTpVH0XiG360QkqsGZIcAN58",
        spaceId: "9jplbea4ynbc",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-TL0YHS191T",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
