require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Zaboravljena Dalmacija`,
    author: {
      name: `Sutra.hr`,
      summary: `˝Zaboravljena Dalmacija˝ priča je o tome kako je nekada bilo, približava vam fotografijom autentične vizure Dalmacije iz vremena od same pojave fotografije sredinom 19. stoljeća pa do 1970.`,
    },
    description: `˝Zaboravljena Dalmacija˝ priča je o tome kako je nekada bilo, približava vam fotografijom autentične vizure Dalmacije iz vremena od same pojave fotografije sredinom 19. stoljeća pa do 1970.`,
    siteUrl: "https://www.zaboravljenadalmacija.hr",
    image: "/seoPhoto.png",
    keywords:
      "Zaboravljena Dalmacija, razglednice, blog, atlas, povijest Dalmacije, Webshop, web trgovina, stare razglednice",
  },

  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "WPGraphQL",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "wpgraphql",
        // Url to query from
        url: "https://shop.zaboravljenadalmacija.hr/graphql",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -150,
        duration: 1400,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/blog`,
    //     name: `blog`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    

    // {
    //   resolve: `gatsby-plugin-react-i18next`,
    //   options: {
    //     localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
    //     languages: [`hr`, `en`],
    //     defaultLanguage: `hr`,
    //     // if you are using Helmet, you must include siteUrl, and make sure you add http:https
    //     siteUrl: `https://localhost:8000/`,
    //     // you can pass any i18next options
    //     // pass following options to allow message content as a key
    //     i18nextOptions: {
    //       interpolation: {
    //         escapeValue: false, // not needed for react as it escapes by default
    //       },
    //       keySeparator: false,
    //       nsSeparator: false,
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway`,
          `Playfair Display\:300,400,500,700`,
          `Amiri\:400`,
          `Roboto\:400`,

          // `Montserrat Alternates\:500`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.GATSBY_FIREBASE_TOKEN_APIKEY,
          authDomain: process.env.GATSBY_FIREBASE_TOKEN_AUTHDOMAIN,
          databaseURL:
            "https://zaboravljena-dalmacija-default-rtdb.europe-west1.firebasedatabase.app",
          projectId: "zaboravljena-dalmacija",
          storageBucket: "zaboravljena-dalmacija.appspot.com",
          messagingSenderId: "258716598494",
          appId: process.env.GATSBY_FIREBASE_TOKEN_APPID,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-remove-serviceworker",
    // `gatsby-plugin-postcss`,

    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.zaboravljenadalmacija.hr",
        sitemap: "https://www.zaboravljenadalmacija.hr/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId:// `UA-186401316-1`,*/
    //     ,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-F5XM9FSFLB", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zaboravljena Dalmacija`,
        short_name: `Zaboravljena Dalmacija`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/domicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.zaboravljenadalmacija.hr`,
      },
    },
  ],
}
