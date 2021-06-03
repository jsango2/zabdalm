// import React from "react"
// import styled from "styled-components"

// const Wrap = styled.div`
//   ${"" /* background-color: grey; */}
//   width: 100%;
//   height: auto;
//   position: relative;
//   margin: 50px 0;
//   text-align: center;
//   ${"" /* @media only screen and (max-width: 76em) {
//     height: 450px;
//   } */}
// `
// const Naslov = styled.div`
//   font-family: Playfair Display;
//   font-size: 54px;
//   font-weight: 600;
//   @media only screen and (max-width: 550px) {
//     font-size: 36px;
//   }
// `
// const Linija = styled.div`
//   height: 1px;
//   width: 110px;
//   background-color: black;
//   @media only screen and (max-width: 550px) {
//     width: 65px;
//   }
// `

// const PressUl = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr;
//   text-align: left;
//   margin: 55px 0 70px;

//   @media only screen and (max-width: 1152px) {
//     grid-template-columns: 1fr 1fr 1fr;
//   }
//   @media only screen and (max-width: 700px) {
//     grid-template-columns: 1fr 1fr;
//   }
// `

// const PressLi = styled.div`
//   display: flex;
//   align-items: baseline;
//   font-style: normal;
//   font-weight: 500;
//   font-size: 12px;
//   line-height: 17px;
//   margin: 10px 5px;

//   & > a {
//     color: #000;
//   }
// `

// const Dot = styled.div`
//   width: 5px;
//   height: 5px;
//   display: inline-table;
//   background-color: #e0e0e0;
//   margin-right: 10px;
//   position: relative;
//   top: -1px;
// `

// const Press = ({ data }) => {
//   console.log(data.wpgraphql.pressObjave.edges)
//   function PressList() {
//     if (data.locales.edges[0].node.language === "hr") {
//       const listItems = data.wpgraphql.pressObjave.edges.map(item => (
//         <PressLi key={item.node.databaseId}>
//           <Dot />
//           <a
//             href={
//               item.node.pressObjave.poveznicaZaKlik
//                 ? item.node.pressObjave.poveznicaZaKlik
//                 : ""
//             }
//           >
//             {item.node.pressObjave.pressObjavaHr}
//           </a>
//         </PressLi>
//       ))
//       return <PressUl>{listItems}</PressUl>
//     } else {
//       const listItems = data.wpgraphql.pressObjave.edges.map(item => (
//         <PressLi key={item.node.databaseId}>
//           <Dot />
//           <a
//             href={
//               item.node.pressObjave.poveznicaZaKlik
//                 ? item.node.pressObjave.poveznicaZaKlik
//                 : ""
//             }
//           >
//             {item.node.pressObjave.pressObjavaEng}
//           </a>
//         </PressLi>
//       ))
//       return <PressUl>{listItems}</PressUl>
//     }
//   }
//   return (
//     <Wrap>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           marginBottom: "40px",
//         }}
//       >
//         <Linija />
//         <Naslov>PRESS</Naslov>
//         <Linija />
//       </div>

//       <PressList />
//     </Wrap>
//   )
// }

// export default Press
