import React from "react"
import BlogCard from "./BlogCard"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useWindowSize } from "./useWindowSize"

const WrapBlogovi = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 342px));
  justify-content: center;
  gap: 26px 24px;
  margin-bottom: 32px;
  @media only screen and (max-width: 550px) {
    margin-bottom: 31px;
  }
`

const WrapCarousel = styled.div`
  margin-bottom: 32px;
  .slick-slide > div {
    display: flex;
    justify-content: center;
  }
  .slick-slide a,
  .slick-slide div,
  .slick-slide img {
    -webkit-user-drag: none;
    user-select: none;
  }
  .slick-dots {
    position: static;
    margin-top: 20px;
  }
  @media only screen and (max-width: 550px) {
    margin-bottom: 31px;
  }
`

function BlogPostCards({ blogovi, carousel }) {
  const size = useWindowSize()

  if (carousel) {
    let slidesToShow = 4
    if (size.width <= 1200 && size.width > 800) {
      slidesToShow = 3
    } else if (size.width <= 800 && size.width > 500) {
      slidesToShow = 2
    } else if (size.width <= 500) {
      slidesToShow = 1
    }
    const settings = {
      dots: true,
      infinite: blogovi.length > slidesToShow,
      slidesToShow,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 4000,
    }

    return (
      <WrapCarousel>
        <Slider {...settings}>
          {blogovi.map(blog => (
            <div key={blog.node.databaseId}>
              <BlogCard blogs={blog} />
            </div>
          ))}
        </Slider>
      </WrapCarousel>
    )
  }

  return (
    <WrapBlogovi>
      {blogovi.map(blog => (
        <BlogCard blogs={blog} key={blog.node.databaseId} />
      ))}
    </WrapBlogovi>
  )
}

export default BlogPostCards
