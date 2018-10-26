module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-128156106-1",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'Eric Weinberger',
    description: 'Front-end Engineer',
    keywords: 'frontend developer, portfolio, personal website',
    url: 'https://www.ericweinberger.com'
  }
};
