module.exports = {
  siteMetadata: {
    title: `Građevinski obrt Dom`,
    author: {
      name: `Sutra.hr`,
      summary: `Građevinski radovi na Ugljanu i Pašmanu. Ključ u ruke, rekonstrukcija, tradicionalna gradnja, fasade i izolacije, uređenje interijera, bazenski sustavi.`,
    },
    description: `Građevinski radovi na Ugljanu i Pašmanu. Ključ u ruke, rekonstrukcija, tradicionalna gradnja, fasade i izolacije, uređenje interijera, bazenski sustavi.`,
    siteUrl: `http://www.go-dom.hr`,
    image: "/seoPhoto.png",
    keywords:
      "Građevinski radovi, Ugljan, Pašman, Ključ u ruke, rekonstrukcija, tradicionalna gradnja, fasade i izolacije, uređenje interijera, bazenski sustavi, Građevina na otocima, Izgradnja kuća, Otočki proizvod, Izgradnja, bazen",
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
        url: "https://cms.go-dom.hr/graphql",
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
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

    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `hr`],
        defaultLanguage: `hr`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `http://localhost:8000`,
        // you can pass any i18next options
        // pass following options to allow message content as a key
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
        // pages: [
        //   {
        //     matchPath: "/:lang?/blog/:uid",
        //     getLanguageFromPath: true,
        //     excludeLanguages: ["es"],
        //   },
        //   {
        //     matchPath: "/preview",
        //     languages: ["en"],
        //   },
        // ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway\:300,400,500,700`,
          `Playfair Display\:300,400,500,700`,
          `Amiri\:400`,

          // `Montserrat Alternates\:500`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyCYu4q30a3Fc3HulZYfxpQ7j5Q29CKwMZ4",
          authDomain: "zaboravljena-dalmacija.firebaseapp.com",
          databaseURL:
            "https://zaboravljena-dalmacija-default-rtdb.europe-west1.firebasedatabase.app",
          projectId: "zaboravljena-dalmacija",
          storageBucket: "zaboravljena-dalmacija.appspot.com",
          messagingSenderId: "258716598494",
          appId: "1:258716598494:web:2a33f92070dd33c7ae424f",
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
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-source-google-photos",
      options: {
        albumsTitles: ["test1"],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.go-dom.hr",
        sitemap: "https://www.go-dom.hr/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-186401316-1`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-XFZYT9DVNK", // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
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
          head: false,
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
        name: `GO-Dom Građevinski obrt`,
        short_name: `GO-Dom`,
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
        siteUrl: `https://www.go-dom.hr`,
      },
    },
  ],
}
