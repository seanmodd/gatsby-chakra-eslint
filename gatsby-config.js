//* Potential Problem: Commented out gatsby-plugin-offline
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `VAR-X`,
    description: `The premier developer clothing line. By developers, for developers. High quality, custom-designed shirts, hats, and hoodies.`,
    author: `Zachary Reece`,
    keywords: [
      'clothing',
      'developer',
      'programmer',
      'coding',
      'code',
      'websites',
      'web developer',
      'hats',
      'shirts',
      'hoodies',
    ],
    siteUrl: 'https://formstorm.design',
    twitterUsername: '@zacharydreece',
    defaultImage: '',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://formstorm.design',
        sitemap: 'https://formstorm.design/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-loadable-components-ssr`,
      options: {
        // Whether replaceHydrateFunction should call ReactDOM.hydrate or ReactDOM.render
        // Defaults to ReactDOM.render on develop and ReactDOM.hydrate on build
        useHydrate: true,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Poppins:700:latin',
            'Poppins:700,600,500,400,300:latin',
            'Barlow:700,600,500,400,300,200:latin',
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_STRAPI_URL,
        queryLimit: 1000, // Default to 100
        collectionTypes: [`product`, `category`, `variant`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/json/`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: 'blurred',
          breakpoints: [300, 600, 960, 1280, 1920],
        },
      },
    },
    {
      resolve: '@chec/gatsby-source-chec',
      options: {
        publicKey:
          process.env.CHEC_PUBLIC_KEY ||
          'pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec',
        downloadImageAssets: true,
      },
    },

    {
      resolve: 'gatsby-source-google-spreadsheets',
      options: {
        spreadsheetId: '1UIpxVZIyfSsu15tpb_4LuwMOJV58Nt2agBOD5wtIXOI',
        // spreadsheetId: '1IC83uQA6dUkNz3u0BVJS4w9e6YRzMAc5ETidPvZmpHk',
        // spreadsheetName: 'gatsby',
        // apiKey: 'GOOGLE-API-KEY'
        // Or
        credentials: {
          type: 'service_account',
          project_id: process.env.PROJECT_ID,
          private_key_id: process.env.PRIVATE_KEY_ID,
          private_key: process.env.PRIVATE_KEY.replace(/(\\r)|(\\n)/g, '\n'),
          client_email: process.env.CLIENT_EMAIL,
          client_id: '',
          // client_id: process.env.CLIENT_ID,
          auth_uri: 'https://accounts.google.com/o/oauth2/auth',
          token_uri: 'https://oauth2.googleapis.com/token',
          auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_URL,
          client_x509_cert_url: process.env.CLIENT_CERT_URL,
        },
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `VAR-X`,
        short_name: `VAR-X`,
        start_url: `/`,
        background_color: `#6600ff`,
        theme_color: `#6600ff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    // `gatsby-plugin-offline`,
    {
      /* Include plugin */
      resolve: 'gatsby-omni-font-loader',

      /* Plugin options */
      options: {
        /* Font loading mode */
        mode: 'async',

        /* Enable font loading listener to handle FOUT */
        enableListener: true,

        /* Preconnect URL-s. This example is for Google Fonts */
        preconnect: ['https://fonts.gstatic.com'],

        /* Self-hosted fonts config. Add font files and font CSS files to "static" folder */
        custom: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: ['ProximaNova'],
            /* Path to the font CSS file inside the "static" folder with @font-face definition */
            file: '/resources/stylesheets/main.css',
          },
        ],

        /* Web fonts. File link should point to font CSS file. */
        web: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: 'Darker Grotesque',
            /* URL to the font CSS file with @font-face definition */
            file: 'https://fonts.googleapis.com/css?family=Darker%20Grotesque:100,200,300,400,500,600,700,800,900',
          },
        ],
      },
    },
  ],
}
