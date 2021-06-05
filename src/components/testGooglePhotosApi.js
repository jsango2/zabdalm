import React, { useState, useEffect } from "react"
import firebase from "gatsby-plugin-firebase"

function FirebaseData() {
  const [data, setData] = useState([])

  // useEffect(() => {
  //   var ref = firebase.database().ref("/")
  //   var listen = ref.on("value", snapshot => {
  //     var listaPodataka = []
  //     snapshot.forEach(snap => {
  //       var data = snap.val()
  //     })
  //     setData(listaPodataka)
  //   })
  //   return () => ref.off("value", listen)
  // }, [])
  // useEffect(() => {
  //   console.log(data)
  // }, [data])
  return <div>Firebase test</div>
}

export default FirebaseData
