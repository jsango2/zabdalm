import React from "react"
import { Link } from "gatsby"

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
    console.log(i)
  }
  // const ActiveStyles = {
  //   color: "black",
  //   fontWeight: "700",
  // }

  return (
    <nav className="paginationWrap">
      <ul className="pagination">
        {pageNumbers.length > 1 ? (
          pageNumbers.map(number => (
            <li key={number} id={number} className="page-item">
              <Link
                onClick={() => paginate(number)}
                to="#"
                className={currentPage === number ? "active" : ""}
              >
                {number}
              </Link>
            </li>
          ))
        ) : (
          <div></div>
        )}
      </ul>
    </nav>
  )
}

export default Pagination
