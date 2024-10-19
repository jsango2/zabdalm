/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta, title, image }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            image
            description
            siteUrl
            title
            keywords
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = title || site.siteMetadata?.title
  const keywords = site.siteMetadata?.keywords

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: defaultTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content:
            "http://sutrashop.com.hr/wp-content/uploads/2021/05/1000px-200.jpg",
        },
        {
          name: " twitter: image",
          content:
            "http://sutrashop.com.hr/wp-content/uploads/2021/05/1000px-200.jpg",
        },
        {
          name: "google-site-verification",
          content: "yn6JHu_hOzWXUh6ReOFij4EcnB9douT7e08YMvcWCp8",
        },
        {
          name: " twitter: card",
          content: "summary_large_image",
        },
        {
          name: "keywords",
          content: keywords,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
