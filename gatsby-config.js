
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "csdgunman",
  },
  plugins: ["gatsby-plugin-gatsby-cloud", {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: ['Droid Sans', 'Droid Serif', 'sans-serif']
      }
    }
  },]
};
